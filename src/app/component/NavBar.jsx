import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-center items-center space-x-10 p-1 bg-stone-500 text-white  w-full text-lg font-serif">
        <Link href="/" className="hover:text-black ">
          Home
        </Link>
        <Link href="/collection/tshirts" className="hover:text-black ">
          T-Shirts
        </Link>
        <Link href="/collection/hoodies" className="hover:text-black ">
          Hoodies
        </Link>
        <Link href="/collection/accessories" className="hover:text-black ">
          Accessories
        </Link>
        <Link href="/about" className="hover:text-black ">
          About
        </Link>
      </nav>
    </>
  );
}
