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
      <div className="flex items-center justify-between p-3 bg-black  w-full">
        <button>
          <Search className="text-white ml-5 cursor-pointer hover:text-pink-600" />
        </button>
        <Link href="/" className="text-4xl text-pink-500 ">
          <span className={satisfy.className}>Sastra</span>
        </Link>
        <Link href="/Cart">
          <ShoppingBag className="text-white mr-5 cursor-pointer hover:text-pink-600" />
        </Link>
      </div>
    </>
  );
}
