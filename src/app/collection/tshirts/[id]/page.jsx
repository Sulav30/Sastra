"use client";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const productDetails = {
  "oversized-eagle-tee": {
    name: "Oversized Eagle Tee",
    price: "₹1,700",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-flower-tee": {
    name: "Oversized Flower Tee",
    price: "₹1,850",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt2.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-basic-tee": {
    name: "Oversized Basic Tee",
    price: "₹1,400",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt3.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },

  "oversized-basic-tee-2": {
    name: "Oversized Basic Tee",
    price: "₹1,400",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-nature-beauty-tee": {
    name: "Oversized Nature & Beauty Tee",
    price: "₹1,900",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt5.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-vintage-royal-blue-tee": {
    name: "Oversized Vintage Royal Blue Tee",
    price: "₹1,450",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt6.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-floweristic-tee": {
    name: "Oversized Floweristic Tee",
    price: "₹1,650",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt7.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-spreading-love-tee": {
    name: "Oversized Spreading Love Tee",
    price: "₹1,500",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt8.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-mount-clone-tee": {
    name: "Oversized Mount Clone Tee",
    price: "₹1,600",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt9.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-green-cupid-tee": {
    name: "Oversized Green Cupid Tee",
    price: "₹1,550",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt10.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-messi-tee": {
    name: "Oversized Lionel Messi Tee",
    price: "₹2,050",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt11.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-jesus-tee": {
    name: "Oversized Jesus Tee",
    price: "₹2,200",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt12.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-holy-mother-tee": {
    name: "Oversized Holy Mother Tee",
    price: "₹2,200",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt13.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
  "oversized-shree-ganesh-tee": {
    name: "Oversized Shree Ganesh Tee",
    price: "₹2,200",
    description: [
      "Shortsleeve crewneck tee.",
      "Digital graphics.",
      "Ribbed collar.",
      "Made in Nepal.",
      "Cold wash recommended.",
    ],
    image: "/t-shirts/tshirt14.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    chart: [
      { size: "S", chest: "41-42", length: "25-26", sleeve: "7-7.5" },
      { size: "M", chest: "43-44", length: "26-27", sleeve: "8-8.5" },
      { size: "L", chest: "45-46", length: "27-28", sleeve: "8.5-9" },
      { size: "XL", chest: "47-50", length: "28-29", sleeve: "9-9.5" },
      { size: "XXL", chest: "51-52", length: "29-30", sleeve: "10-11" },
    ],
  },
};

export default function ProductDetail() {
  const params = useParams();
  const id = params.id; // This will get the product id from the URL

  const product = productDetails[id];

  if (!product) {
    return <p>Product not found</p>;
  }

  // State to manage quantity and selected size

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
    <div className="grid-cols-2 grid font-serif">
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
        <div className="mt-5 ">
          <h2 className="text-medium">Size</h2>
          <div className="flex space-x-7 mt-1">
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
          <div className="flex items-center ">
            <button
              onClick={handleDecrease}
              className="bg-black text-white px-4 py-2 border-white border-2 rounded-l-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              -
            </button>
            <span className="px-4 py-2 bg-black text-white ">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-black text-white border-2 border-white px-4 py-2 rounded-r-full cursor-pointer hover:bg-stone-500 hover:text-black"
            >
              +
            </button>
          </div>

          <div className="flex  ">
            <button
              onClick={handleAddToCart}
              className="bg-white text-black py-3 rounded-full w-70 -ml-20 cursor-pointer hover:bg-stone-600 hover:text-white"
            >
              <span className="flex items-center justify-center gap-3 text-lg ">
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
            className="bg-white text-black text-lg font-semibold px-6 py-3 rounded-full w-110 -ml-8 hover:bg-stone-600 hover:text-white cursor-pointer"
          >
            Buy now
          </button>
        </div>

        <h2 className="mt-5 text-xl font-medium"> Description:</h2>
        <p className="underline mt-1 text-red-500">
          DISCLAMIER : GARMENT SIZE REDUCE AFTER FIRST WASH
        </p>
        <ul className="list-disc pl-5 text-white mt-4">
          {product.description.map((item, index) => (
            <li key={index} className="mb-1 uppercase">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-5 text-xl font-medium">Size Chart:</h2>
        <table className="mt-1 table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Size</th>
              <th className="border px-4 py-2">Chest (Inches)</th>
              <th className="border px-4 py-2">Length (Inches)</th>
              <th className="border px-4 py-2">Sleeve (Inches)</th>
            </tr>
          </thead>
          <tbody>
            {product.chart.map((size, index) => (
              <tr key={index}>
                <td className="border px-10 py-1">{size.size}</td>
                <td className="border px-10 py-1">{size.chest}</td>
                <td className="border px-10 py-1">{size.length}</td>
                <td className="border px-10 py-1">{size.sleeve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
