import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Shipping() {
  const { formData, setFormData } = useOutletContext();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = {};
    if (formData.name.trim() === "") found.name = "Full Name is required";
    if (formData.address.trim() === "") found.address = "Address is required";
    if (formData.city.trim() === "") found.city = "City is required";
    if (formData.state.trim() === "") found.state = "State is required";
    if (formData.zip.trim() === "") found.zip = "ZIP Code is required";
    if (formData.country.trim() === "") found.country = "Country is required";

    setErrors(found);

    if (Object.keys(found).length === 0) {
      navigate("/checkout/payment");
    }
  };

  const fieldClass =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Shipping Information</h1>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input name="name" id="name" value={formData.name} onChange={handleChange} className={fieldClass} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input name="address" id="address" value={formData.address} onChange={handleChange} className={fieldClass} />
          {errors.address && <p className={errorClass}>{errors.address}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input name="city" id="city" value={formData.city} onChange={handleChange} className={fieldClass} />
          {errors.city && <p className={errorClass}>{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <input name="state" id="state" value={formData.state} onChange={handleChange} className={fieldClass} />
          {errors.state && <p className={errorClass}>{errors.state}</p>}
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
          <input name="zip" id="zip" value={formData.zip} onChange={handleChange} className={fieldClass} />
          {errors.zip && <p className={errorClass}>{errors.zip}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input name="country" id="country" value={formData.country} onChange={handleChange} className={fieldClass} />
          {errors.country && <p className={errorClass}>{errors.country}</p>}
        </div>

        <div>
          <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
}