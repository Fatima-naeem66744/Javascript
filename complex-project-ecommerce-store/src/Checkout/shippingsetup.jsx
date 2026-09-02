export default function ShippingStep({
  formData,
  setFormData,
  onNext,
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
          Shipping Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block mb-2 font-medium">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Fatima"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Naeem"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your street address"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Lahore"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Postal Code
            </label>

            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="54000"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

        </div>

        <button
          onClick={onNext}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}