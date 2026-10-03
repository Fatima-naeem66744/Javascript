import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  return <Outlet context={{ formData, setFormData }} />;
}