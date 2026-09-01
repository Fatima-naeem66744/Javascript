import { Link } from "react-router-dom";
import { CLEAR_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../reducers/cartReducer";
import { useCart } from "../context/useCart";

export default function Cart() {
  const { cart, dispatch, subtotal, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Your Cart</h1>
        <p className="mb-4">Your cart is empty.</p>
        <Link to="/products" className="inline-block rounded bg-black px-4 py-2 text-white">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <button
          onClick={() => dispatch({ type: CLEAR_CART })}
          className="rounded border px-3 py-2 text-sm"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
            <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-1">${item.price.toFixed(2)}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  disabled={item.quantity === 1}
                  onClick={() => dispatch({ type: UPDATE_QUANTITY, payload: { id: item.id, quantity: item.quantity - 1 } })}
                  className="rounded border px-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch({ type: UPDATE_QUANTITY, payload: { id: item.id, quantity: item.quantity + 1 } })}
                  className="rounded border px-2"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })}
                  className="ml-2 text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-1 text-right">
        <p className="text-lg">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
