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
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize(); // Initial call
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
    <div>
      <img src="/home.png" alt="homecover" className="w-full mb-10" />
      <h1 className="text-4xl mb-5 font-bold  text-center text-white">
        Sastra 2025 Collection
      </h1>

      {/* Slider */}
      <div className="relative overflow-hidden max-w-6xl mx-auto">
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
                className="block rounded hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full mb-6 aspect-[1/1] object-contain rounded-bl-4xl rounded-tr-4xl hover:scale-110 transition-transform duration-200"
                />
                <h3 className=" font-semibold text-lg text-center">
                  {product.name}
                </h3>
                <p className="text-green-600 font-semibold text-center">
                  {product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-pink-500 px-3 py-1 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-pink-500 px-3 py-1 rounded-full shadow"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Home;
