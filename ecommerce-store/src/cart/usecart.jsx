import { useContext } from "react";
import { CartContext } from "./cartcontext";


export default function useCart() {
    return  useContext(CartContext);
}