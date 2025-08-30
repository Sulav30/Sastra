"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("o");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="bg-black shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          🎉 WASSUP <span className="text-pink-500">SASTRA</span> FAM!
        </h1>
        <p className="text-white mb-2">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        {orderId && (
          <p className="text-gray-400 mb-6">
            <span className="font-semibold">Order ID:</span> #{orderId}
          </p>
        )}

        <button
          onClick={() => router.push("/")}
          className="bg-pink-600 hover:bg-pink-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
