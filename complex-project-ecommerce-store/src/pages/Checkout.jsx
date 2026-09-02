import { useState } from "react";
import ShippingStep from "../Checkout/shippingsetup";
import PaymentStep from "../Checkout/paymentsetup";
import ReviewStep from "../Checkout/reviewstep";
import OrderConfirmation from "../Checkout/orderconfirmation";
import { CLEAR_CART } from "../reducers/cartReducer";
import { useCart } from "../context/useCart";



export default function Checkout() {
  const { dispatch } = useCart();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",

    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);

  // -------------------------
  // SHIPPING VALIDATION
  // -------------------------

  function validateShipping() {
    if (!formData.firstName.trim()) {
      return "First name is required.";
    }

    if (!formData.lastName.trim()) {
      return "Last name is required.";
    }

    if (!formData.address.trim()) {
      return "Address is required.";
    }

    if (!formData.city.trim()) {
      return "City is required.";
    }

    if (!formData.postalCode.trim()) {
      return "Postal code is required.";
    }

    return "";
  }

  // -------------------------
  // PAYMENT VALIDATION
  // -------------------------

  function validatePayment() {
    if (!formData.cardName.trim()) {
      return "Card holder name is required.";
    }

    if (!formData.cardNumber.trim()) {
      return "Card number is required.";
    }

    if (!/^\d{16}$/.test(formData.cardNumber)) {
      return "Card number must contain 16 digits.";
    }

    if (!formData.expiry.trim()) {
      return "Expiry date is required.";
    }

    if (!formData.cvv.trim()) {
      return "CVV is required.";
    }

    if (!/^\d{3}$/.test(formData.cvv)) {
      return "CVV must contain 3 digits.";
    }

    return "";
  }

  // -------------------------
  // SHIPPING → PAYMENT
  // -------------------------

  function handleShippingNext() {
    const validationError = validateShipping();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep(2);
  }

  // -------------------------
  // PAYMENT → REVIEW
  // -------------------------

  function handlePaymentNext() {
    const validationError = validatePayment();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setStep(3);
  }

  // -------------------------
  // BACK BUTTON
  // -------------------------

  function handleBack() {
    setError("");
    setStep((currentStep) => currentStep - 1);
  }

  // -------------------------
  // SIMULATE ORDER SUBMISSION
  // -------------------------

  function handlePlaceOrder() {
    setLoading(true);
    setError("");

    // Simulate an API request
    setTimeout(() => {
      const newOrder = {
        id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        date: new Date().toLocaleDateString(),
        customer: `${formData.firstName} ${formData.lastName}`,
      };

      dispatch({ type: CLEAR_CART });
      setOrder(newOrder);
      setLoading(false);
    }, 2000);
  }

  // -------------------------
  // ORDER CONFIRMATION
  // -------------------------

  if (order) {
    return <OrderConfirmation order={order} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Checkout
      </h1>

      {/* Progress indicator */}

      <div className="flex justify-center items-center gap-4 mb-10">
        <div
          className={`px-4 py-2 rounded-full ${
            step >= 1
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          1. Shipping
        </div>

        <div
          className={`px-4 py-2 rounded-full ${
            step >= 2
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          2. Payment
        </div>

        <div
          className={`px-4 py-2 rounded-full ${
            step >= 3
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          3. Review
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
          {error}
        </div>
      )}

      {/* STEP 1 */}

      {step === 1 && (
        <ShippingStep
          formData={formData}
          setFormData={setFormData}
          onNext={handleShippingNext}
        />
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <PaymentStep
          formData={formData}
          setFormData={setFormData}
          onNext={handlePaymentNext}
          onBack={handleBack}
        />
      )}

      {/* STEP 3 */}

      {step === 3 && (
        <ReviewStep
          formData={formData}
          onBack={handleBack}
          onPlaceOrder={handlePlaceOrder}
          loading={loading}
        />
      )}
    </div>
  );
}
