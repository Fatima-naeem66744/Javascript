
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Link
        to="/products"
        className="mb-6 inline-block rounded bg-gray-200 px-4 py-2"
      >
        ← Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="h-96 w-full object-contain"
          />
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-500">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="mt-4 text-2xl font-bold">
            ${product.price}
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            {product.description}
          </p>

          <div className="mt-4">
            <p>
              ⭐ Rating: {product.rating.rate}
            </p>

            <p className="text-gray-500">
              {product.rating.count} reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

