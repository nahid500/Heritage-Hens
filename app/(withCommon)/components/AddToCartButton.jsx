"use client";
import { useCartStore } from "../store/CartStore";
import { toast } from "react-toastify";

export default function AddToCartButton({ product, className = "" }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <button
      onClick={handleAdd}
      // bg-[#d97706] text-white py-2 px-4 mx-4 my-2 rounded hover:bg-[#b45309] transition-colors
      className="bg-[#d97706] text-white py-2 px-4 mx-4 my-2 rounded hover:bg-[#b45309] transition-colors"
    >
      Add to Cart
    </button>
  );
}
