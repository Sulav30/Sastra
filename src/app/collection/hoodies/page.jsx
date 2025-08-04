"use client";
import { useState } from "react";

const initialHoodies = [
  {
    name: "Oversized Galaxy Hoodie",
    price: "रु 3,600",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-07-30",
  },
  {
    name: "Oversized Butterfly Hoodie",
    price: "रु 3,550",
    imageUrl: "/hoodies/hoodie2.png",
    addedAt: "2025-07-29",
  },
  {
    name: "Oversized Royal Dragon Hoodie",
    price: "रु 3,900",
    imageUrl: "/hoodies/hoodie3.png",
    addedAt: "2025-07-28",
  },
  {
    name: "Oversized Calm Sun Hoodie",
    price: "रु 3,800",
    imageUrl: "/hoodies/hoodie4.png",
    addedAt: "2025-07-10",
  },
  {
    name: "Oversized Charm Skeleton Hoodie",
    price: "रु 3,950",
    imageUrl: "/hoodies/hoodie5.png",
    addedAt: "2025-08-02",
  },
  {
    name: "Oversized Danfe Tee",
    price: "रु 3,400",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-08-01",
  },
  {
    name: "Oversized Danfe Tee",
    price: "रु 3,500",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-05-31",
  },
  {
    name: "Oversized Danfe Tee",
    price: "रु 3,550",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-05-15",
  },
  {
    name: "Oversized Danfe Tee",
    price: "रु 3,650",
    imageUrl: "/hoodies/hoodie1.png",
    addedAt: "2025-05-01",
  },
  {
    name: "Oversized Danfe Tee",
    price: "रु 3,300",
    imageUrl: "/hoodies/hoodie1.png",
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
    let sortedHoodies = [...initialHoodies];

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
    <div className="min-h-screen px-6 py-10 bg-white text-black font-serif">
      <h1 className="text-4xl font-bold text-center mb-6">Hoodies</h1>
      <div className="text-lg font-semibold mb-4">
        Showing {hoodies.length} results
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
        {hoodies.map((hoodie, index) => (
          <div key={index} className="text-center">
            <img
              src={hoodie.imageUrl}
              alt={hoodie.name}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200 cursor-pointer rounded-lg"
            />
            <h2 className="font-semibold text-lg mt-4">{hoodie.name}</h2>
            <p className="text-gray-800">{hoodie.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
