import { useState, useEffect } from "react";
import getProducts from "./productsapi.jsx";
import ProductCard from "./productcard.jsx";

export default function Products() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    getProducts()
    .then((data) => {
        setProducts(data);
        setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    });
} , []);
if (loading) {
    return <div>Loading...</div>;
}
if (error) {
    return <div>Error: {error}</div>;
}


return (
  <div className="px-6 py-8">
  <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
)   }