import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Header() {
  const { itemCount: totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-2xl font-black tracking-tight text-transparent">
            QuickShop
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className="text-sm font-semibold text-gray-600 transition-colors hover:text-purple-600"
          >
            Shop Products
          </Link>
          <Link
            to="/cart"
            className="group relative flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 transition-all hover:bg-purple-100 hover:text-purple-800"
          >
            <span>Cart</span>
            {totalItems > 0 ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white transition-all group-hover:scale-110">
                {totalItems}
              </span>
            ) : (
              <span className="text-gray-400">0</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
