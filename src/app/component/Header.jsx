import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-100  w-full">
        <button>
          <Search className="text-black cursor-pointer" />
        </button>
        <Link href="/" className="text-2xl text-pink-500">
          Sastra
        </Link>
        <Link href="/Cart">
          <ShoppingBag className="text-black cursor-pointer" />
        </Link>
      </div>
    </>
  );
}
