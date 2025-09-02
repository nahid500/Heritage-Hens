"use client";

import React, { useState } from "react";
import { useCartStore } from "../store/CartStore"; // or wherever your cart state is
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { getStripe } from "../lib/getStripe"; // helper to load stripe.js
import { getStripe } from "@stripe/stripe-js";

export default function OrderPage() {
  const router = useRouter();

  const cartItems = useCartStore((state) => state.items)  || [];
  const clearCart = useCartStore((state) => state.clearCart);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // default cod
  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !address.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);

    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.id, // adapt to your product model
        productName: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      if (paymentMethod === "cod") {
        // Place order directly with COD
        const res = await fetch("/api/orders/cod", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, address, orderItems, totalPrice }),
        });

        if (!res.ok) throw new Error("Failed to place COD order");

        clearCart();
        toast.success("Order placed successfully! We will deliver soon.");
        router.push("/thank-you"); // or order confirmation page

      } else if (paymentMethod === "stripe") {
        // Call backend to create order and stripe session
        const res = await fetch("/api/orders/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderItems, totalPrice }),
        });

        if (!res.ok) throw new Error("Failed to create Stripe checkout session");

        const { sessionId } = await res.json();

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
          toast.error(error.message);
        }
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-4 bg-white shadow rounded mt-10">
      <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Address</label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            disabled={loading}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="cod">Cash on Delivery (COD)</option>
            <option value="stripe">Credit/Debit Card (Stripe)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold ${
            loading ? "bg-gray-400" : "bg-[#d97706] hover:bg-[#b45309]"
          }`}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
