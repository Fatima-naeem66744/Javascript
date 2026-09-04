import { memo } from "react";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../reducers/cartReducer";
import { useCart } from "../context/useCart";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <div className="rounded-lg border p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold">
        {product.title}
      </h2>

      <p className="mt-2 font-bold">
        ${product.price}
      </p>

      <div className="mt-4 flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className="rounded bg-black px-4 py-2 text-white"
        >
          View Details
        </Link>

        <button
          onClick={handleAddToCart}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default memo(ProductCard);