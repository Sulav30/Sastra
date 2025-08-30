"use client";
import Link from "next/link";
import { useState } from "react";

const initialHoodies = [
  {
    id: "oversized-galaxy-hoodie",
    name: "Oversized Galaxy Hoodie",
    price: "रु 3,600",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-07-30",
  },
  {
    id: "oversized-butterfly-hoodie",
    name: "Oversized Butterfly Hoodie",
    price: "रु 3,550",
    imageUrl: "/hoodies/hoodie2.png",
    addedAt: "2025-07-29",
  },
  {
    id: "oversized-royal-dragon-hoodie",
    name: "Oversized Royal Dragon Hoodie",
    price: "रु 3,900",
    imageUrl: "/hoodies/hoodie3.png",
    addedAt: "2025-07-28",
  },
  {
    id: "oversized-calm-sun-hoodie",
    name: "Oversized Calm Sun Hoodie",
    price: "रु 3,800",
    imageUrl: "/hoodies/hoodie4.png",
    addedAt: "2025-07-10",
  },
  {
    id: "oversized-charm-skeleton-hoodie",
    name: "Oversized Charm Skeleton Hoodie",
    price: "रु 3,950",
    imageUrl: "/hoodies/hoodie5.png",
    addedAt: "2025-08-02",
  },
  {
    id: "oversized-geometric-scene-hoodie",
    name: "Oversized Geometric Scene Hoodie",
    price: "रु 3,400",
    imageUrl: "/hoodies/hoodie6.png",
    addedAt: "2025-08-01",
  },
  {
    id: "oversized-sunset-vibe-hoodie",
    name: "Oversized Sunset Vibe Hoodie",
    price: "रु 3,500",
    imageUrl: "/hoodies/hoodie7.png",
    addedAt: "2025-05-31",
  },
  {
    id: "oversized-aquarius-hoodie",
    name: "Oversized Aquarius Hoodie",
    price: "रु 3,550",
    imageUrl: "/hoodies/hoodie8.png",
    addedAt: "2025-05-15",
  },
  {
    id: "oversized-adventurous-hoodie",
    name: "Oversized Adventurous Hoodie",
    price: "रु 3,650",
    imageUrl: "/hoodies/hoodie9.png",
    addedAt: "2025-05-01",
  },
  {
    id: "oversized-classic-red-hoodie",
    name: "Oversized Classic Red Hoodie",
    price: "रु 3,300",
    imageUrl: "/hoodies/hoodie10.png",
    addedAt: "2025-04-20",
  },
];

export default function page() {
  const [hoodies, setHoodies] = useState(initialHoodies);
  const [sortOption, setSortOption] = useState("Newest");

  // Function to clean the price string and convert it to a number
  const getPriceNumber = (price) => {
    return parseInt(price.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters and convert to integer
  };

  const handleSort = (option) => {
    let sortedHoodies = [...hoodies];

    if (option === "Price: Low to High") {
      sortedHoodies.sort(
        (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price)
      );
    } else if (option === "Price: High to Low") {
      sortedHoodies.sort(
        (a, b) => getPriceNumber(b.price) - getPriceNumber(a.price)
      );
    } else if (option === "Newest") {
      sortedHoodies.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    }

    setSortOption(option);
    setHoodies(sortedHoodies);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-black text-white font-serif">
      <h1 className="text-4xl font-bold text-center mb-6">Hoodies</h1>
      <div className="text-lg font-semibold mb-4">
        Showing {hoodies.length} results
      </div>

      <div className="flex justify-between items-center mb-6 px-4 sm:px-6 lg:px-8">
        <div className="flex-1"></div> {/* Placeholder for alignment */}
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
        {hoodies.map((hoodie) => (
          <div key={hoodie.id} className="text-center">
            <Link href={`/collection/hoodies/${hoodie.id}`}>
              <img
                src={hoodie.imageUrl}
                alt={hoodie.name}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200 cursor-pointer rounded-lg"
              />
              <h2 className="font-semibold text-lg mt-4">{hoodie.name}</h2>
              <p className="text-green-500">{hoodie.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
