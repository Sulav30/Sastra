"use client";

import Link from "next/link";
import { useState } from "react";

const initialTshirts = [
  {
    id: "oversized-eagle-tee",
    name: "Oversized Eagle Tee",
    price: "रु 1,700",
    imageUrl: "/t-shirts/tshirt1.jpg",
    addedAt: "2025-07-30",
  },
  {
    id: "oversized-flower-tee",
    name: "Oversized Flower Tee",
    price: "रु 1,850",
    imageUrl: "/t-shirts/tshirt2.jpg",
    addedAt: "2025-07-29",
  },
  {
    id: "oversized-basic-tee",
    name: "Oversized Basic Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt3.jpg",
    addedAt: "2025-07-28",
  },
  {
    id: "oversized-basic-tee-2",
    name: "Oversized Basic Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt4.jpg",
    addedAt: "2025-07-10",
  },
  {
    id: "oversized-nature-beauty-tee",
    name: "Oversized Nature & Beauty Tee",
    price: "रु 1,900",
    imageUrl: "/t-shirts/tshirt5.jpg",
    addedAt: "2025-08-02",
  },
  {
    id: "oversized-vintage-royal-blue-tee",
    name: "Oversized Vintage Royal Blue Tee",
    price: "रु 1,450",
    imageUrl: "/t-shirts/tshirt6.png",
    addedAt: "2025-08-01",
  },
  {
    id: "oversized-floweristic-tee",
    name: "Oversized Floweristic Tee",
    price: "रु 1,650",
    imageUrl: "/t-shirts/tshirt7.png",
    addedAt: "2025-05-31",
  },
  {
    id: "oversized-spreading-love-tee",
    name: "Oversized Spreading Love Tee",
    price: "रु 1,500",
    imageUrl: "/t-shirts/tshirt8.png",
    addedAt: "2025-05-15",
  },
  {
    id: "oversized-mount-clone-tee",
    name: "Oversized Mount Clone Tee",
    price: "रु 1,600",
    imageUrl: "/t-shirts/tshirt9.jpg",
    addedAt: "2025-05-01",
  },
  {
    id: "oversized-green-cupid-tee",
    name: "Oversized Green Cupid Tee",
    price: "रु 1,550",
    imageUrl: "/t-shirts/tshirt10.png",
    addedAt: "2025-04-20",
  },
  {
    id: "oversized-messi-tee",
    name: "Oversized Lionel Messi Tee",
    price: "रु 2,050",
    imageUrl: "/t-shirts/tshirt11.jpg",
    addedAt: "2025-04-10",
  },
  {
    id: "oversized-jesus-tee",
    name: "Oversized Jesus Tee",
    price: "रु 2,200",
    imageUrl: "/t-shirts/tshirt12.jpg",
    addedAt: "2025-04-01",
  },
  {
    id: "oversized-holy-mother-tee",
    name: "Oversized Holy Mother Tee",
    price: "रु 2,200",
    imageUrl: "/t-shirts/tshirt13.jpg",
    addedAt: "2025-07-30",
  },
  {
    id: "oversized-shree-ganesh-tee",
    name: "Oversized Shree Ganesh Tee",
    price: "रु 2,200",
    imageUrl: "/t-shirts/tshirt14.jpg",
    addedAt: "2025-07-30",
  },
];

export default function Page() {
  const [tshirts, setTshirts] = useState(initialTshirts);
  const [sortOption, setSortOption] = useState("Newest");

  // Function to clean the price string and convert it to a number
  const getPriceNumber = (price) => {
    return parseInt(price.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and convert to integer
  };

  const handleSort = (option) => {
    let sortedTshirts = [...tshirts];

    if (option === "Price: Low to High") {
      sortedTshirts.sort(
        (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price)
      );
    } else if (option === "Price: High to Low") {
      sortedTshirts.sort(
        (a, b) => getPriceNumber(b.price) - getPriceNumber(a.price)
      );
    } else if (option === "Newest") {
      sortedTshirts.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    }

    setSortOption(option);
    setTshirts(sortedTshirts);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white font-serif ">
      <h1 className="text-4xl font-bold text-center mb-6">T-Shirts</h1>

      <div className="text-lg font-semibold mb-4">
        Showing {tshirts.length} results
      </div>

      <div className="flex justify-between items-center mb-6">
        <div></div> {/* placeholder for alignment */}
        <div className="text-sm font-medium flex items-center gap-2">
          <span>SORT BY</span>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 text-sm bg-black text-white"
          >
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {tshirts.map((shirt) => (
          <div key={shirt.id} className="text-center">
            <Link href={`/collection/tshirts/${shirt.id}`}>
              <img
                src={shirt.imageUrl}
                alt={shirt.name}
                className="w-full object-cover hover:scale-110 transition-transform duration-200 cursor-pointer rounded-lg"
              />
              <h2 className="font-semibold text-lg mt-4">{shirt.name}</h2>
              <p className="text-green-500">{shirt.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
