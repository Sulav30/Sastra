"use client";

import { useCart } from "@/app/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (delta) => {
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    updateQuantity(item.id, newQty, item.size); // Pass size to update quantity of the correct variant
  };

  return (
    <div className="flex items-start justify-between gap-4 border-b pb-4">
      {/* Image */}
      <div className="w-20 h-20 overflow-hidden rounded">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details */}
      <div className="flex-1 text-black">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        {item.size && <p className="text-sm">Size: {item.size}</p>}
        <p className="text-sm text-green-800 font-semibold">
          ₹{item.price.toLocaleString()}
        </p>

        {/* Quantity Control */}
        <div className="flex items-center mt-2">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="border px-2 py-1 text-sm hover:bg-gray-200 cursor-pointer rounded-full"
          >
            −
          </button>
          <span className="mx-2 text-sm">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="border px-2 py-1 text-sm hover:bg-gray-200 cursor-pointer rounded-full"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id, item.size)}
        className="text-gray-700 hover:text-red-500 mt-1 cursor-pointer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
