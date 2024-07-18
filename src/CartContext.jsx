// CartContext.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        if (updatedItems[existingItemIndex].quantity <= 0) {
          return updatedItems.filter((item) => item.id !== product.id);
        }
        return updatedItems;
      }
      if (quantity > 0) {
        return [...prevItems, { ...product, quantity }];
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
