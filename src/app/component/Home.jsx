"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import products from "../data/products";

const selectedProductIds = [
  "oversized-basic-tee",
  "oversized-eagle-tee",
  "oversized-messi-tee",
  "oversized-shree-ganesh-tee",
  "oversized-green-cupid-tee",
  "oversized-jesus-tee",
  "oversized-floweristic-tee",
  "oversized-galaxy-hoodie",
  "oversized-royal-dragon-hoodie",
  "oversized-sunset-vibe-hoodie",
  "oversized-adventurous-hoodie",
  "oversized-charm-skeleton-hoodie",
  "sastra-ski-mask",
  "sastra-durag",
  "sastra-balaclava",
];

const Home = () => {
  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1); // Phones
      } else if (width < 1024) {
        setItemsPerPage(2); // Tablets
      } else if (width < 1440) {
        setItemsPerPage(3); // Laptops
      } else {
        setItemsPerPage(4); // Desktops
      }
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = selectedProducts.length;
  const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="">
      {/* Banner Image */}
      <img
        src="/home.png"
        alt="Home cover"
        className="w-full h-auto mb-10 object-cover"
      />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-bold text-center text-white">
        Sastra 2025 Collection
      </h1>

      {/* Slider */}
      <div className="relative overflow-hidden max-w-screen-xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(totalItems / itemsPerPage) * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / (totalItems / itemsPerPage))
            }%)`,
          }}
        >
          {selectedProducts.map((product, index) => (
            <div
              key={index}
              className="p-4"
              style={{ width: `${100 / totalItems}%` }}
            >
              <Link
                href={`/collection/${product.category}/${product.id}`}
                className="block rounded-lg hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-contain rounded-bl-4xl rounded-tr-4xl hover:scale-105 transition-transform duration-300"
                />
                <h3 className="mt-4 text-base sm:text-lg font-semibold text-center text-white">
                  {product.name}
                </h3>
                <p className="text-green-500 font-semibold text-center">
                  {product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full shadow-md z-10"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-full shadow-md z-10"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Home;
