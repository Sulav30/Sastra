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
    price: "रु 2,000",
    imageUrl: "/t-shirts/tshirt5.jpg",
    addedAt: "2025-08-02",
  },
  {
    id: "oversized-volume9-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt1.jpg",
    addedAt: "2025-08-01",
  },
  {
    id: "oversized-volume8-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt2.jpg",
    addedAt: "2025-05-31",
  },
  {
    id: "oversized-volume7-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt3.jpg",
    addedAt: "2025-05-15",
  },
  {
    id: "oversized-volume6-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt4.jpg",
    addedAt: "2025-05-01",
  },
  {
    id: "oversized-volume5-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt5.jpg",
    addedAt: "2025-04-20",
  },
  {
    id: "oversized-volume4-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt2.jpg",
    addedAt: "2025-04-10",
  },
  {
    id: "oversized-volume3-tee",
    name: "Oversized Danfe Tee",
    price: "रु 1,400",
    imageUrl: "/t-shirts/tshirt3.jpg",
    addedAt: "2025-04-01",
  },
  {
    id: "oversized-volume2-tee",
    name: "Oversized Uncaged Tee",
    price: "रु 2,000",
    imageUrl: "/t-shirts/tshirt1.jpg",
    addedAt: "2025-07-30",
  },
  {
    id: "oversized-volume1-tee",
    name: "Oversized Uncaged Tee",
    price: "रु 2,000",
    imageUrl: "/t-shirts/tshirt5.jpg",
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
    <div className="min-h-screen px-6 py-10 bg-white text-black font-serif ">
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
            className="border border-gray-300 rounded px-3 py-1 text-sm"
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
              <p className="text-gray-800">{shirt.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
