// app/lib/CartContext.tsx
import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
import { CartItem, Product } from './types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  // Add more functions like removeFromCart, updateQuantity etc.
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        // Increase quantity
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new item
      return [...prevItems, { product, quantity: 1 }];
    });
    console.log(`Added ${product.name} to cart!`);
    alert(`${product.name} added to cart!`);
  };

  return <CartContext.Provider value={{ items, addToCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};