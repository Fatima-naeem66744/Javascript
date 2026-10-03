import { CartContext } from "./cartcontext";
import { useReducer, useEffect, useMemo } from "react";
import { cartReducer } from "./cartreducer";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const itemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const total = useMemo(() => {
    return subtotal;
  }, [subtotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        itemCount,
        subtotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
