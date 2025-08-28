import { Search, ShoppingBag } from "lucide-react";
import { Satisfy } from "next/font/google";
import { SearchBar } from "./SearchBar";

import Link from "next/link";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

export default function Header({ onSearchResults }) {
  return (
    <div className="flex items-center justify-between p-3 bg-black  w-full fixed top-0 left-0 z-50">
      <SearchBar onSearchResults={onSearchResults} />

      <Link href="/" className="text-4xl text-pink-500 ">
        <span className={satisfy.className}>Sastra</span>
      </Link>
      <Link href="/Cart">
        <ShoppingBag className="text-white mr-5 cursor-pointer hover:text-pink-600" />
      </Link>
    </div>
  );
}
