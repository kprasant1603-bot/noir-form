import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export type Toast = {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, colorVariant?: string, size?: string) => void;
  removeFromCart: (productId: string, colorVariant: string, size: string) => void;
  updateQuantity: (productId: string, colorVariant: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toasts: Toast[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  currency: string;
  formatPrice: (amount: number) => string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'noir_form_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage:', e);
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }, [cart]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, colorVariant?: string, size?: string) => {
    const selectedColor = colorVariant || product.colorName;
    const selectedSize = size || (product.sizes.length > 0 ? product.sizes[0] : 'Standard');

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === product.id &&
          item.colorVariant === selectedColor &&
          item.size === selectedSize
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            colorVariant: selectedColor,
            size: selectedSize,
            quantity: 1,
            image: product.image,
            category: product.category,
          },
        ];
      }
    });

    addToast(
      'Added to Cart',
      `${product.name} (${selectedColor} / ${selectedSize}) added to your bag.`,
      'success'
    );
  };

  const removeFromCart = (productId: string, colorVariant: string, size: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.productId === productId && item.colorVariant === colorVariant && item.size === size)
      )
    );
    addToast('Item Removed', 'The item was removed from your bag.', 'info');
  };

  const updateQuantity = (
    productId: string,
    colorVariant: string,
    size: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, colorVariant, size);
      return;
    }

    setCart((prev) =>
      prev.map((item) => {
        if (
          item.productId === productId &&
          item.colorVariant === colorVariant &&
          item.size === size
        ) {
          return { ...item, quantity: Math.min(10, Math.max(1, quantity)) };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        toasts,
        addToast,
        removeToast,
        currency: 'INR',
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
