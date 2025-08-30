"use client";

import { Search, ShoppingBag } from "lucide-react";
import { Satisfy } from "next/font/google";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

export default function Header({ onSearchResults }) {
  const { cartItems, toggleCart } = useCart();

  return (
    <div className="flex items-center justify-between p-3 bg-black w-full fixed top-0 left-0 z-50">
      <SearchBar onSearchResults={onSearchResults} />

      <Link href="/" className="text-4xl text-pink-500">
        <span className={satisfy.className}>Sastra</span>
      </Link>

      <div className="relative">
        <ShoppingBag
          onClick={toggleCart}
          className="text-white mr-5 cursor-pointer hover:text-pink-600"
        />
        {cartItems.length > 0 && (
          <span className="absolute -top-3 -left-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </div>
    </div>
  );
}
