"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useProductStore } from "../../store/ProductStore";
import { useCartStore } from "../../store/CartStore";
import { toast } from "react-toastify";

export default function ProductPage() {
  const { id } = useParams();
  const { products, fetchProductById, loading, error } = useProductStore();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    // Try to get product from store
    const found = products.find((p) => p._id === id);

    if (found) {
      setProduct(found);
    } else {
      // Fetch product by id if not found
      fetchProductById(id).then((data) => setProduct(data));
    }
  }, [id, products, fetchProductById]);

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="py-24 bg-gray-100 justify-center grid grid-cols-1 md:grid-cols-2">
      <div className="md:justify-end flex">
        <Image
          src={product.imgUrls?.[0]}
          alt={product.name}
          width={500}
          height={500}
          className="relative w-auto h-auto"
          priority // add priority if it's above the fold
        />
      </div>

      <div className="bg-white p-4 max-w-xl">
        {product.featured && (
          <div className="inline-block bg-[#d97706] text-white px-2 py-1 text-sm font-semibold rounded-md">
            Featured
          </div>
        )}
        <h2 className="py-4 text-3xl text-[#d97706] font-semibold">{product.name}</h2>
        <p className="py-2 text-xl">{product.desc}</p>

        {/* Payment methods */}
        <p className="font-serif">Payment Methods:</p>
        <div className="text-gray-800 py-2">
          <ul>
            <li className="font-serif">- Cash on Delivery</li>
            <li className="font-serif flex">- Credit Cards</li>
            <li className="font-serif">- Mobile Financial Services</li>
          </ul>
        </div>

        {/* Price */}
        <p className="text-[#d97706] font-bold text-2xl py-4">
          Price: ${product.price}
          <strike className="pl-2 text-[#d88b33] text-xl">
            ${Math.round(product.price + product.price * 0.5)}
          </strike>
        </p>

        {/* Quantity selector and Add to Cart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#d97706] text-[#d97706] py-2 px-4 rounded flex items-center justify-evenly">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="text-xl font-bold"
            >
              -
            </button>
            <span className="font-semibold">Quantity: {quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="text-xl font-bold"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              addToCart({ ...product, quantity });
              toast.success(`${quantity} ${product.name} added to cart!`);
            }}
            className="bg-[#d97706] text-white py-2 px-4 rounded hover:bg-[#b45309] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
