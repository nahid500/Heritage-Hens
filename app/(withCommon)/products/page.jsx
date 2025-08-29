"use client"
import React, { useState, useEffect } from "react";
import BreedsCard from "../components/BreedsCard";

export default function Products() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL; // your env variable
        const response = await fetch(`${backendUrl}/api/products`);
        if (!response.ok) throw new Error("Failed to fetch breeds");

        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.error("Error fetching breeds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading breeds...</p>;

  return (
    <div className="my-24">
      <h2 className="text-5xl text-[#d97706] font-bold text-center">
        Our Heritage Breeds
      </h2>
      <p className="mx-auto my-4 text-center text-md max-w-2xl">
        Whether you're looking for prolific egg layers, friendly backyard companions, or beautiful ornamental birds, we have the perfect chickens for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-24 gap-4">
        {breeds.map((breed) => (
          <BreedsCard key={breed._id || breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
