import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/">Home</Link>
        <Link href="/collection/t-shirts">T-Shirts</Link>
        <Link href="/collection/hoodies">Hoodies</Link>
        <Link href="/collection/accessories">Accessories</Link>
        <Link href="/about">About</Link>
      </nav>
    </>
  );
}
