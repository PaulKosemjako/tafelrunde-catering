import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  title: string;
  portions: number;
  extras: { name: string; quantity: number; price: number }[];
  totalPrice: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalAmount: number;
}

// 🧩 Standard-Initialwert für den Kontext
const defaultCartContext: CartContextType = {
  items: [],
  addToCart: () => {
    throw new Error("addToCart() außerhalb des CartProviders aufgerufen");
  },
  removeFromCart: () => {
    throw new Error("removeFromCart() außerhalb des CartProviders aufgerufen");
  },
  clearCart: () => {
    throw new Error("clearCart() außerhalb des CartProviders aufgerufen");
  },
  totalAmount: 0,
};

const CartContext = createContext<CartContextType>(defaultCartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                portions: item.portions + newItem.portions,
                totalPrice: item.totalPrice + newItem.totalPrice,
              }
            : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart muss innerhalb von <CartProvider> verwendet werden");
  }
  return context;
};
