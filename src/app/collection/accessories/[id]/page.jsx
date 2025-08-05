"use client";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const productDetails = {
  "sastra-durag": {
    name: "Sastra Durag",
    price: "रु 700",
    image: "/accessories/acces1.png",
    description: ["Cotton", "Made in Nepal", "Free size"],
  },
  "sastra-ski-mask": {
    name: "Sastra Ski Mask",
    price: "रु 600",
    image: "/accessories/acces2.png",
    description: ["Hand woven", "Acrylic wool", "Made in Nepal", "Free size"],
  },
  "sastra-balaclava": {
    name: "Sastra Balaclava",
    price: "रु 900",
    image: "/accessories/acces3.png",
    description: [
      "Made in Nepal",
      "Free size",
      "Weight: 0.06kg",
      "Dimensions: 4.53 x 1.85 x 1.97 in",
    ],
  },
};

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  const product = productDetails[id];
  if (!product) {
    return <p>Product not found</p>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    const newItem = {
      name: product.name,
      price: product.price,
      quantity: quantity,
    };
    addToCart(newItem); // Add item to cart
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to checkout with ${quantity} of ${product.name}.`);
  };

  return (
    <div className="grid-cols-2 grid font-serif">
      <img
        src={product.image}
        alt={product.name}
        className="w-100 h-100 object-cover rounded-lg m-40"
      />

      <div className="p-10 bg-black shadow-lg rounded-lg w-150">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-green-500 mb-5">
          {product.price}
        </p>
        {/* Quantity Selector */}
        <div className="grid grid-cols-2 mt-4">
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-l-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              onClick={handleAddToCart}
              className="bg-white text-black px-6 py-3 -ml-21 rounded-full w-70 cursor-pointer hover:bg-stone-600 hover:text-white"
            >
              <span className="flex items-center justify-center gap-3 text-lg">
                <ShoppingCart className="h-5 w-5" />
                Add to cart
              </span>
            </button>
          </div>
        </div>

        {/* Buy Now Buttons */}
        <div className="mt-5 ml-10">
          <button
            onClick={handleBuyNow}
            className="bg-white text-black text-lg font-semibold px-6 py-3 -ml-7 rounded-full w-110 cursor-pointer hover:bg-stone-600 hover:text-white"
          >
            Buy now
          </button>
        </div>

        <h2 className="mt-6 text-xl font-medium">Description:</h2>
        <ul className="list-disc pl-5 text-white mt-2">
          {product.description.map((item, index) => (
            <li key={index} className="mb-2 uppercase">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
