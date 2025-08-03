"use client";
import { useState } from "react";

const initialAccessories = [
  {
    name: "Sastra Durag",
    price: "रु 700",
    imgUrl: "/accessories/acces1.png",
    addedAt: "2025-05-30",
  },
  {
    name: "Sastra Ski Mask",
    price: "रु 600",
    imgUrl: "/accessories/acces2.png",
    addedAt: "2025-08-11",
  },
  {
    name: "Sastra Balaclava",
    price: "रु 900",
    imgUrl: "/accessories/acces3.png",
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
    let sortedAccessories = [...initialAccessories];

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
      <div className="min-h-screen px-6 py-10 bg-white text-black ">
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
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {accessories.map((accessory, index) => (
            <div key={index} className="text-center">
              <img
                src={accessory.imgUrl}
                alt={accessory.name}
                className="w-full h-auto object-cover"
              />
              <h2 className="font-semibold text-lg mt-4">{accessory.name}</h2>
              <p className="text-gray-800">{accessory.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
