import Header from './header';
import Products from './products/products';
import { Routes, Route ,Navigate} from "react-router-dom";
import ProductDetails from './products/productdetails';
import Cart from './cart/cart'
import CartProvider from './cart/cartprovider'
import Shipping from './checkout/shipping';
import Payment from './checkout/payment';
import Review from './checkout/review';
// import Checkout from './checkout/checkout';
import { lazy, Suspense } from "react";

const Checkout = lazy(() => import("./checkout/checkout"));


function App() {
return(
  <CartProvider>
  <div>
        <Header/>
<Suspense fallback={<div>Loading...</div>}>
    <Routes>

      <Route path="/" element={<Navigate to="/products" replace />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path = "/cart" element = {<Cart/>} />

      <Route path="/checkout" element={<Checkout />}>
        <Route index element={<Shipping />} />
        <Route path="payment" element={<Payment />} />
        <Route path="review" element={<Review />} />
      </Route>
</Routes></Suspense>
  </div>
  </CartProvider>
)
}

export default App
