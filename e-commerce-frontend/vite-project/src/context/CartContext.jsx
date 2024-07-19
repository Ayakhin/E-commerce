// src/context/CartContext.jsx
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Assurez-vous d'utiliser react-router-dom pour la navigation

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };

  const clearItemFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const goToPayment = () => {
    navigate("/payment");
  };

  const checkout = () => {
    console.log("Order placed:", cart);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearItemFromCart, checkout, goToPayment }}>
      {children}
    </CartContext.Provider>
  );
};
