"use client";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const productDetails = {
  "oversized-galaxy-hoodie": {
    name: "Oversized Galaxy Hoodie",
    price: "रु 3,600",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie1.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-butterfly-hoodie": {
    name: "Oversized Butterfly Hoodie",
    price: "रु 3,550",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie2.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-royal-dragon-hoodie": {
    name: "Oversized Royal Dragon Hoodie",
    price: "रु 3,900",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie3.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-calm-sun-hoodie": {
    name: "Oversized Calm Sun Hoodie",
    price: "रु 3,800",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie4.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-charm-skeleton-hoodie": {
    name: "Oversized Charm Skeleton Hoodie",
    price: "रु 3,950",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie5.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-geometric-scene-hoodie": {
    name: "Oversized Geometric Scene Hoodie",
    price: "रु 3,400",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie6.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-sunset-vibe-hoodie": {
    name: "Oversized Sunset Vibe Hoodie",
    price: "रु 3,500",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie7.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-aquarius-hoodie": {
    name: "Oversized Aquarius Hoodie",
    price: "रु 3,600",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie8.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-adventurous-hoodie": {
    name: "Oversized Adventurous Hoodie",
    price: "रु 3,700",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie9.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
  "oversized-classic-red-hoodie": {
    name: "Oversized Classic Red Hoodie",
    price: "रु 3,800",
    description: [
      "Unisex",
      "Kangaroo pocket.",
      "Embroidery puffy foam.",
      "Ribbed cuff and waist",
      "Made in Nepal.",
      "100% super soft cotton fleece",
      "Heavyweight fabric",
    ],
    image: "/hoodies/hoodie10.png",
    sizes: ["M", "L", "XL", "XXL"],
  },
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const product = productDetails[id];
  if (!product) {
    return <p>Product not find</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleSizeChange = (size) => setSelectedSize(size);

  const handleAddToCart = () => {
    const newItem = {
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
    };
    addToCart(newItem);
  };

  const handleBuyNow = () => {
    console.log(
      `Proceeding to checkout with ${quantity} of ${product.name} (${selectedSize}).`
    );
  };

  return (
    <div className="grid-cols-2 grid font-serif ">
      <img
        src={product.image}
        alt={product.name}
        className="w-150 h-150 object-cover rounded-lg  m-25"
      />

      <div className=" p-10 bg-black shadow-lg rounded-lg w-150">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-semibold text-green-500 mb-5">
          {product.price}
        </p>

        {/* Size Selection */}
        <div className="mt-5">
          <h2 className="text-medium">Size</h2>
          <div className="flex space-x-8 mt-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeChange(size)}
                className={`px-6 py-2 rounded-full ${
                  selectedSize === size
                    ? "bg-stone-500 text-black "
                    : "bg-black text-white border-2 border-white"
                } transition duration-200 cursor-pointer`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="grid grid-cols-2 mt-5">
          <div className="flex items-center">
            <button
              onClick={handleDecrease}
              className="bg-black text-white border-2 border-white px-4 py-2 rounded-l-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              -
            </button>
            <span className="px-4 py-2 bg-black text-white">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-black text-white border-2 border-white px-4 py-2 rounded-r-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              onClick={handleAddToCart}
              className="bg-white text-black py-3  rounded-full w-55 cursor-pointer -ml-21 hover:bg-stone-600 hover:text-white"
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
            className="bg-white text-black text-lg font-semibold px-6 py-3 -ml-10 rounded-full w-100 hover:bg-stone-600 hover:text-white cursor-pointer"
          >
            Buy now
          </button>
        </div>

        <h2 className="mt-5 text-xl font-medium"> Description:</h2>

        <ul className="list-disc pl-5 text-white mt-2">
          {product.description.map((item, index) => (
            <li key={index} className="mb-1 uppercase">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
