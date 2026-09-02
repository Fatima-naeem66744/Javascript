export default function ReviewStep({
  formData,
  onBack,
  onPlaceOrder,
  loading,
}) {
  const maskedCardNumber =
    formData.cardNumber.slice(-4);

  return (
    <div className="max-w-2xl mx-auto space-y-6">

      {/* Shipping */}

      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Shipping Information
        </h2>

        <div className="space-y-1 text-gray-700">
          <p>
            <strong>Name:</strong>{" "}
            {formData.firstName} {formData.lastName}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {formData.address}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {formData.city}
          </p>

          <p>
            <strong>Postal Code:</strong>{" "}
            {formData.postalCode}
          </p>
        </div>

      </div>

      {/* Payment */}

      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Payment Information
        </h2>

        <p className="text-gray-700">
          <strong>Card Holder:</strong>{" "}
          {formData.cardName}
        </p>

        <p className="text-gray-700 mt-2">
          <strong>Card:</strong>{" "}
          •••• •••• •••• {maskedCardNumber}
        </p>

      </div>

      {/* Order Summary */}

      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between border-b pb-3">
          <span>Product total</span>
          <span>$100.00</span>
        </div>

        <div className="flex justify-between border-b py-3">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>

        <div className="flex justify-between pt-3 text-lg font-bold">
          <span>Total</span>
          <span>$110.00</span>
        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <button
          onClick={onBack}
          disabled={loading}
          className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={onPlaceOrder}
          disabled={loading}
          className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>

      </div>

    </div>
  );
}