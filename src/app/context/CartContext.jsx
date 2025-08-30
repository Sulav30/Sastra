"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

// Utility to sync cart with localStorage
const syncLocalStorage = (cartItems) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

// Reducer to handle cart actions
function cartReducer(state, action) {
  let updatedItems;

  switch (action.type) {
    case "INITIALIZE_CART":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "ADD_TO_CART":
      const exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exists) {
        updatedItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.cartItems, action.payload];
      }
      syncLocalStorage(updatedItems);
      return { ...state, cartItems: updatedItems };

    case "UPDATE_QUANTITY":
      updatedItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      syncLocalStorage(updatedItems);
      return { ...state, cartItems: updatedItems };

    case "REMOVE_FROM_CART":
      updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      syncLocalStorage(updatedItems);
      return { ...state, cartItems: updatedItems };

    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };

    default:
      return state;

    case "CLEAR_CART":
      syncLocalStorage([]);
      return { ...state, cartItems: [] };
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartItems");
      if (saved) {
        dispatch({
          type: "INITIALIZE_CART",
          payload: JSON.parse(saved),
        });
      }
    }
  }, []);

  // Context actions
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        isCartOpen: state.isCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
