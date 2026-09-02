export default function PaymentStep({
  formData,
  setFormData,
  onNext,
  onBack,
}) {
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md rounded-xl p-6">

        <h2 className="text-2xl font-semibold mb-6">
          Payment Information
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Card Holder Name
            </label>

            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Name on card"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Card Number
            </label>

            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234567812345678"
              maxLength="16"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Expiry
              </label>

              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                CVV
              </label>

              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength="3"
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

          </div>

        </div>

        <div className="flex gap-4 mt-6">

          <button
            onClick={onBack}
            className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100"
          >
            Back
          </button>

          <button
            onClick={onNext}
            className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            Review Order
          </button>

        </div>
      </div>
    </div>
  );
}