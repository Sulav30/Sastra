import { Search, ShoppingBag } from "lucide-react";
import { Satisfy } from "next/font/google";
import Link from "next/link";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between p-3 bg-gray-100  w-full">
        <button>
          <Search className="text-black ml-5 cursor-pointer" />
        </button>
        <Link href="/" className="text-4xl text-pink-500 ">
          <span className={satisfy.className}>Sastra</span>
        </Link>
        <Link href="/Cart">
          <ShoppingBag className="text-black mr-5 cursor-pointer" />
        </Link>
      </div>
    </>
  );
}
