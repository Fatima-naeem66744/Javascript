
import {
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { cartReducer } from "../reducers/cartReducer";
import { CartContext } from "./CartContext";



export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      const savedCart = localStorage.getItem("cart");

      return savedCart ? JSON.parse(savedCart) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totals = useMemo(() => {
    const itemCount = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return {
      itemCount,
      subtotal,
      total: subtotal,
    };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        itemCount: totals.itemCount,
        subtotal: totals.subtotal,
        total: totals.total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}



