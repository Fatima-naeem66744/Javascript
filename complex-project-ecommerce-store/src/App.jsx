import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Cart from "./components/Cart";

const Checkout = lazy(() => import("./pages/Checkout"));

export default function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading Checkout...</p>}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </>
  );
}