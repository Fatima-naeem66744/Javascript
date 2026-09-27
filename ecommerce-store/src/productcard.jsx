import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white flex flex-col justify-between">
      <div>
        <img 
          src={product.title} 
          alt={product.title} 
          className="w-full h-48 object-cover rounded-md mb-4" 
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-800 font-bold mb-4">${product.price}</p>
      </div>

      {/* Buttons container */}
      <div className="flex gap-2">
        <Link to={`/products/${product.id}`} className="flex-1 text-center rounded bg-black px-4 py-2 text-white hover:bg-gray-800 transition">
          View Details
        </Link>
        <button className="flex-1 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}