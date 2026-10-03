import useCart from "./usecart"
import { Link } from 'react-router-dom'
import {REMOVE_FROM_CART , UPDATE_CART_ITEM_QUANTITY , CLEAR_CART } from "./cartreducer"

export default function Cart() {
  const { cart, dispatch, subtotal } = useCart();
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

return(
  <div>
    <div>
      <button onClick={() => dispatch({ type: CLEAR_CART })} className="bg-red-500 text-white px-4 py-2 rounded">
        Clear Cart
      </button>
    </div>
    <div>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center">
            <button onClick={() => item.quantity > 1
              ? dispatch({ type: UPDATE_CART_ITEM_QUANTITY, payload: { id: item.id, quantity: item.quantity - 1 } })
              : dispatch({ type: REMOVE_FROM_CART, payload: { id: item.id } })} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button onClick={() => dispatch({ type: UPDATE_CART_ITEM_QUANTITY, payload: { id: item.id, quantity: item.quantity + 1 } })} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
              +
            </button>
          </div>
        </div>
      ))}
        <div className="flex justify-between border-t pt-4 mt-4 text-lg font-bold">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="mt-4 inline-block rounded bg-black px-4 py-2 text-white">CLICK TO CHECKOUT</Link>
    </div>
    </div>
)
}