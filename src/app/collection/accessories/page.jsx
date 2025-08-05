"use client";
import Link from "next/link";
import { useState } from "react";

const initialAccessories = [
  {
    id: "sastra-durag",
    name: "Sastra Durag",
    price: "रु 700",
    image: "/accessories/acces1.png",
    addedAt: "2025-05-30",
  },
  {
    id: "sastra-ski-mask",
    name: "Sastra Ski Mask",
    price: "रु 600",
    image: "/accessories/acces2.png",
    addedAt: "2025-08-11",
  },
  {
    id: "sastra-balaclava",
    name: "Sastra Balaclava",
    price: "रु 900",
    image: "/accessories/acces3.png",
    addedAt: "2025-7-23",
  },
];

export default function page() {
  const [accessories, setAccessories] = useState(initialAccessories);
  const [sortOption, setSortOption] = useState("Newest");

  const getPriceNumber = (price) => {
    return parseInt(price.replace(/[^0-9]/g, ""), 10);
  };

  const handleSort = (option) => {
    let sortedAccessories = [...accessories];

    if (option === "Price: Low to High") {
      sortedAccessories.sort(
        (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price)
      );
    } else if (option === "Price: High to Low") {
      sortedAccessories.sort(
        (a, b) => getPriceNumber(b.price) - getPriceNumber(a.price)
      );
    } else if (option === "Newest") {
      sortedAccessories.sort(
        (a, b) => new Date(b.addedAt) - new Date(a.addedAt)
      );
    }

    setAccessories(sortedAccessories);
    setSortOption(option);
  };

  return (
    <>
      <div className="min-h-screen px-6 py-10 bg-black text-white font-serif">
        <h1 className="text-4xl font-bold text-center mb-6">Accessories</h1>
        <div className="text-lg font-semibold mb-4">
          Showing {accessories.length} results
        </div>

        <div className="flex justify-between items-center mb-6">
          <div></div>
          <div className="text-sm font-medium flex items-center gap-2">
            <span>SORT OUT</span>
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
          {accessories.map((accessory) => (
            <div key={accessory.id} className="text-center">
              <Link href={`/collection/accessories/${accessory.id}`}>
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200 cursor-pointer rounded-lg"
                />
                <h2 className="font-semibold text-lg mt-4">{accessory.name}</h2>
                <p className="text-green-500">{accessory.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
