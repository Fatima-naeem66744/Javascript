
import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "../reducers/cartReducer";

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

