"use client";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
    shipping: "inside",
    payment: "cod",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = form.shipping === "inside" ? 150 : 200;
  const total = subtotal + shippingFee;

  const validate = () => {
    let errs = {};
    if (!form.email) errs.email = "Required";
    if (!form.firstName) errs.firstName = "Required";
    if (!form.lastName) errs.lastName = "Required";
    if (!form.address) errs.address = "Required";
    if (!form.city) errs.city = "Required";
    if (!form.phone) errs.phone = "Required";

    if (form.payment === "card") {
      if (!form.cardNumber) errs.cardNumber = "Required";
      if (!form.expiry) errs.expiry = "Required";
      if (!form.cvv) errs.cvv = "Required";
      if (!form.nameOnCard) errs.nameOnCard = "Required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fakeOrderId = Math.floor(Math.random() * 1000000);
    clearCart();
    router.push(`/checkout/success?o=${fakeOrderId}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE: FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <input
            type="email"
            placeholder="Email"
            className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2  ${
              errors.email ? "border-red-500" : "border"
            }`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Delivery</h2>
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="First name"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2  ${
                errors.firstName ? "border-red-500" : "border"
              }`}
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />

            <input
              placeholder="Last name"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2  ${
                errors.lastName ? "border-red-500" : "border"
              }`}
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <input
            placeholder="Address"
            className={`w-full border p-3 rounded-lg mt-3 focus:outline-none focus:ring-2 ${
              errors.address ? "border-red-500" : "border"
            }`}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-2 mt-3">
            <input
              placeholder="City"
              className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                errors.city ? "border-red-500 " : "border p-3"
              }`}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              placeholder="Postal code"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 "
              value={form.postal}
              onChange={(e) => setForm({ ...form, postal: e.target.value })}
            />
          </div>
          <input
            placeholder="Phone"
            className={`w-full border p-3 rounded-lg mt-3 focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 " : "border"
            }`}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Shipping</h2>
          <label className="block">
            <input
              type="radio"
              name="shipping"
              checked={form.shipping === "inside"}
              onChange={() => setForm({ ...form, shipping: "inside" })}
            />{" "}
            Inside Valley <span className="text-sm">(Rs.150)</span>
          </label>
          <label className="block mt-2">
            <input
              type="radio"
              name="shipping"
              checked={form.shipping === "outside"}
              onChange={() => setForm({ ...form, shipping: "outside" })}
            />{" "}
            Outside Valley <span className="text-sm">(Rs.200)</span>
          </label>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Payment</h2>
          <label className="block">
            <input
              type="radio"
              name="payment"
              checked={form.payment === "card"}
              onChange={() => setForm({ ...form, payment: "card" })}
            />{" "}
            Credit card
          </label>
          {form.payment === "card" && (
            <div className="space-y-3 pl-5 mt-2">
              <input
                placeholder="Card number"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.cardNumber ? "border-red-500 " : "border"
                }`}
                value={form.cardNumber}
                onChange={(e) =>
                  setForm({ ...form, cardNumber: e.target.value })
                }
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="MM/YY"
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                    errors.expiry ? "border-red-500 " : "border"
                  }`}
                  value={form.expiry}
                  onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                />
                <input
                  placeholder="CVV"
                  className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                    errors.cvv ? "border-red-500 " : "border"
                  }`}
                  value={form.cvv}
                  onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                />
              </div>
              <input
                placeholder="Name on card"
                className={`w-full border p-3 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.nameOnCard ? "border-red-500 " : "border"
                }`}
                value={form.nameOnCard}
                onChange={(e) =>
                  setForm({ ...form, nameOnCard: e.target.value })
                }
              />
            </div>
          )}
          <label className="block mt-2">
            <input
              type="radio"
              name="payment"
              checked={form.payment === "fonepay"}
              onChange={() => setForm({ ...form, payment: "fonepay" })}
            />{" "}
            Fonepay
          </label>
          <label className="block mt-2">
            <input
              type="radio"
              name="payment"
              checked={form.payment === "cod"}
              onChange={() => setForm({ ...form, payment: "cod" })}
            />{" "}
            Cash on Delivery
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold w-full p-3 rounded-xl hover:bg-blue-900 cursor-pointer"
        >
          Pay now
        </button>
      </form>

      {/* RIGHT SIDE: SUMMARY */}
      <div className="  pt-4 mt-4 space-y-4">
        <h3 className="text-xl font-semibold">Order Summary</h3>
        {cartItems.length === 0 && <p>Your cart is empty.</p>}
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.size}`}
            className="flex gap-3 py-3 items-center border-b"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <div className="text-sm font-medium line-clamp-1">
                {item.name}
              </div>
              <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
            </div>
            <div className="text-sm">{`₹${(
              item.price * item.quantity
            ).toLocaleString()}`}</div>
          </div>
        ))}
        <div className=" mt-4 flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{shippingFee}</span>
        </div>
        <div className="flex justify-between font-bold text-base">
          <span className="font-semibold text-xl">Total</span>
          <span className="text-green-600">₹{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
