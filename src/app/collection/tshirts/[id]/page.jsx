"use client";
import { useParams } from "next/navigation";

const productDetails = {
  "oversized-eagle-tee": {
    name: "Oversized Eagle Tee",
    price: "₹1,700",
    description: "Timeless Style with a vintage eagle design.",
    image: "/t-shirts/tshirt1.jpg",
  },
  "oversized-flower-tee": {
    name: "Oversized Flower Tee",
    price: "₹1,850",
    description: "A floral design that stands out in any setting.",
    image: "/t-shirts/tshirt2.jpg",
  },
  "oversized-basic-tee": {
    name: "Oversized Basic Tee",
    price: "₹1,400",
    description: "The perfect basic tee for everyday wear.",
    image: "/t-shirts/tshirt3.jpg",
  },

  "oversized-basic-tee-2": {
    name: "Oversized Basic Tee",
    price: "₹1,400",
    description: "A versatile basic tee for all occasions.",
    image: "/t-shirts/tshirt4.jpg",
  },
  "oversized-nature-beauty-tee": {
    name: "Oversized Nature & Beauty Tee",
    price: "₹2,000",
    description: "Celebrate nature with this beautiful tee.",
    image: "/t-shirts/tshirt5.jpg",
  },
  "oversized-volume9-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A unique tee featuring the beautiful Danfe bird.",
    image: "/t-shirts/tshirt1.jpg",
  },
  "oversized-volume8-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A stylish tee with a Danfe design.",
    image: "/t-shirts/tshirt2.jpg",
  },
  "oversized-volume7-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A trendy tee featuring the Danfe motif.",
    image: "/t-shirts/tshirt3.jpg",
  },
  "oversized-volume6-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A comfortable tee with a Danfe print.",
    image: "/t-shirts/tshirt4.jpg",
  },
  "oversized-volume5-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A classic tee with a Danfe design.",
    image: "/t-shirts/tshirt5.jpg",
  },
  "oversized-volume4-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A stylish tee with a Danfe motif.",
    image: "/t-shirts/tshirt2.jpg",
  },
  "oversized-volume3-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A trendy tee featuring the Danfe motif.",
    image: "/t-shirts/tshirt3.jpg",
  },
  "oversized-volume2-tee": {
    name: "Oversized Danfe Tee",
    price: "₹1,400",
    description: "A comfortable tee with a Danfe print.",
    image: "/t-shirts/tshirt1.jpg",
  },
  "oversized-volume1-tee": {
    name: "Oversized Uncaged Tee",
    price: "₹2,000",
    description: "A unique tee with an uncaged design.",
    image: "/t-shirts/tshirt5.jpg",
  },
};
const ProductDetail = () => {
  const params = useParams();
  const id = params.id; // This will get the product id from the URL

  const product = productDetails[id];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-xl text-shite mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-red-600 mb-6">
        {product.price}
      </p>

      {/* Size Selector */}
      <div className="mb-6">
        <label htmlFor="size" className="block text-lg mb-2">
          Size
        </label>
        <select
          id="size"
          className="w-full p-2 border border-gray-300 rounded-md bg-black text-white"
        >
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>

      {/* Add to Cart and Buy Now buttons */}
      <div className="flex justify-between items-center">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Add to Cart
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
