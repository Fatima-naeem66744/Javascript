
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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

      <Link
        to={`/products/${product.id}`}
        className="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
      >
        View Details
      </Link>
    </div>
  );
}

