import { useParams }from "react-router-dom";
import { Link } from "react-router-dom";
//import products from "./productsapi.jsx";
import  { useState , useEffect } from "react";
import {getProductById} from "./productsapi.jsx";

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
        <div className="grid gap-8 md:grid-cols-2 items-start mx-auto max-w-5xl px-6 py-8">
            <div className="md:col-span-2 mb-6">
                <Link to="/products" className="text-sm text-gray-500 hover:text-gray-900 transition-colors"><span aria-hidden="true">&#8592;</span>Back to products</Link>
            </div>
            <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{product.category}</p>
                <img src = {product.image} alt={product.title} className="w-full h-64 md:h-80 object-contain rounded-lg bg-gray-50 p-4" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{product.title}</h1>
                <p className = "text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                <p className="text-sm text-gray-400">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
        </div>
    )

}
