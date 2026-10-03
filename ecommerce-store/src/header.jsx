import useCart from "./cart/usecart";
import { Link } from "react-router-dom";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
        Clothing store
      </h1>
      <Link to="/cart" className="relative">
        ADD TO CART
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {itemCount}
        </span>
      </Link>
    </header>
  );
}
