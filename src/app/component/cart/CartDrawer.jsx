"use client";

import { useCart } from "@/app/context/CartContext";
import CartItem from "./CartItem";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function CartDrawer() {
  const { isCartOpen, toggleCart, cartItems } = useCart();
  const drawerRef = useRef();
  const router = useRouter(); // Initialize router

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  // Handle click outside drawer
  useEffect(() => {
    function handleClickOutside(event) {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleCart();
      }
    }

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  if (!isCartOpen) return null;

  // Handle checkout button click to navigate to checkout
  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to checkout page
  };

  return (
    // Full screen backdrop
    <div className="fixed inset-0 z-[999] flex justify-end font-serif">
      {/* Cart Drawer */}
      <div
        ref={drawerRef}
        className="relative w-[400px] h-full bg-stone-400 shadow-xl z-10"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-black">
            Cart <span className="text-gray-600">({cartItems.length})</span>
          </h2>
          <button onClick={toggleCart} className="text-3xl font-light">
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-4 p-4 overflow-y-auto h-[calc(100%-220px)]">
          {cartItems.length === 0 ? (
            <p className="text-center font-semibold text-gray-800 mt-10">
              Your cart is empty! 🥺
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem key={`${item.id}-${item.size}`} item={item} />
            ))
          )}
        </div>

        {/* Checkout */}
        <div className="p-4 border-t space-y-2">
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Estimated total</span>
            <span className="text-black font-semibold">
              ₹{total.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-gray-600">
            Taxes and shipping calculated at checkout.
          </p>
          <button
            onClick={handleCheckout} // Trigger checkout navigation
            className="w-full bg-black text-white font-bold py-2 rounded-xl mt-2 hover:bg-stone-700 hover:text-black transition cursor-pointer"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
