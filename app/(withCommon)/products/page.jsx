"use client"

import { useEffect } from "react";
import { useProductStore } from "../store/ProductStore";
import BreedsCard from "../components/BreedsCard";

export default function Products() {
  const { products, loading, fetchProducts, error } = useProductStore();

  useEffect(() => {
    if (products.length === 0) fetchProducts();
  }, [fetchProducts, products.length]);

  if (loading) return <p className="text-center mt-10">Loading breeds...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="my-24">
      <h2 className="text-5xl text-[#d97706] font-bold text-center">
        Our Heritage Breeds
      </h2>
      <p className="mx-auto my-4 text-center text-md max-w-2xl">
        Whether you're looking for prolific egg layers, friendly backyard companions, or beautiful ornamental birds, we have the perfect chickens for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-24 gap-4">
        {products.map((breed) => (
          <BreedsCard key={breed._id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
