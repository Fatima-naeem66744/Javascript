import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function PaymentStep() {
  const { formData, setFormData } = useOutletContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    //destructuring process to get the name 
    // and value of the input field that triggered the event 
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const found = {};
    if (formData.cardNumber.trim().length < 15) found.cardNumber = "Card number looks too short";
    if (formData.expiryDate.trim() === "") found.expiryDate = "Expiry date is required";
    if (formData.cvv.trim().length < 3) found.cvv = "CVV must be 3 digits";

    setErrors(found);

    if (Object.keys(found).length === 0) {
      navigate("/checkout/review");
    }
  }

  const fieldClass =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Payment</h1>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={fieldClass}
          />
          {errors.cardNumber && <p className={errorClass}>{errors.cardNumber}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              id="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              className={fieldClass}
            />
            {errors.expiryDate && <p className={errorClass}>{errors.expiryDate}</p>}
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className={fieldClass}
            />
            {errors.cvv && <p className={errorClass}>{errors.cvv}</p>}
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to="/checkout"
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-gray-700 hover:bg-gray-50"
          >
            Back
          </Link>
          <button
            type="submit"
            className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            Review Order
          </button>
        </div>
      </form>
    </div>
  );
}