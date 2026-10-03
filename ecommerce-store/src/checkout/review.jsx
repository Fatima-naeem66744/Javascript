import { Link, useNavigate, useOutletContext } from "react-router-dom";
import useCart from "../cart/usecart";
import { CLEAR_CART } from "../cart/cartreducer";

export default function Review() {
  const { formData } = useOutletContext();
  const { cart, dispatch, subtotal } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch({ type: CLEAR_CART });
    navigate("/products");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Review Order</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 font-semibold">Ship to</h2>
          <p>{formData.name}</p>
          <p>{formData.address}</p>
          <p>
            {formData.city}, {formData.state} {formData.zip}
          </p>
          <p>{formData.country}</p>
          <Link
            to="/checkout"
            className="mt-2 inline-block text-sm text-indigo-600 hover:underline"
          >
            Edit shipping
          </Link>
        </div>

        <div>
          <h2 className="mb-2 font-semibold">Items</h2>
          <div className="space-y-2">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-2">
        <Link
          to="/checkout/payment"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-gray-700 hover:bg-gray-50"
        >
          Back
        </Link>
        <button
          onClick={handlePlaceOrder}
          className="flex-1 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}