"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto my-10 p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-green-600">Payment Successful!</h1>
      <p className="mb-6">Thank you for your order. Your payment was processed successfully.</p>
      <button
        onClick={() => router.push("/")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
      >
        Go to Home
      </button>
    </div>
  );
}
