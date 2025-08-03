import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center items-center gap-15 p-3 bg-stone-700 text-white  w-full">
        <Link href="/" className="hover:text-pink-400 hover:underline">
          Home
        </Link>
        <Link
          href="/collection/t-shirts"
          className="hover:text-pink-400 hover:underline"
        >
          T-Shirts
        </Link>
        <Link
          href="/collection/hoodies"
          className="hover:text-pink-400 hover:underline"
        >
          Hoodies
        </Link>
        <Link
          href="/collection/accessories"
          className="hover:text-pink-400 hover:underline"
        >
          Accessories
        </Link>
        <Link href="/about" className="hover:text-pink-400 hover:underline">
          About
        </Link>
      </nav>
    </>
  );
}
