"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/CartStore";
import { loadStripe } from "@stripe/stripe-js";
import { useAuthStore } from "../store/useAuthStore";
import Router from "next/router";

// ✅ Stripe singleton
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function OrderPage() {
  const cart = useCartStore((state) => state.cart);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = useAuthStore((state) => state.token);

 



  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      console.log(token);
      
      if (!token) throw new Error("You must be logged in to place an order.");

      // ✅ Prepare order payload
      const payload = {
        orderItems: cart.map((item) => ({
          product: item._id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalPrice: getTotal(),
      };

      // ✅ Send order to backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to create order.");

      // ✅ Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const stripeResult = await stripe.redirectToCheckout({ sessionId: data.sessionId });

      if (stripeResult.error) {
        throw new Error(stripeResult.error.message);
      }

      clearCart(); // Optional: clear cart after redirect
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-xl mx-auto my-10 p-4">
      <h1 className="text-3xl font-bold mb-6">Confirm Your Order</h1>

      <ul>
        {cart.map((item) => (
          <li key={item._id} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <span>{item.quantity} × ${item.price}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-xl font-semibold">Total: ${getTotal().toFixed(2)}</h2>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* <button
        disabled={loading}
        onClick={handleCheckout}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 mt-6 rounded"
      >
        {loading ? "Redirecting to Stripe..." : "Pay Now"}
      </button> */}

      <button onClick={()=> (router.push('/order'))} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 mt-6 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
}
