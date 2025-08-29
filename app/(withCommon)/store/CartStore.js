"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      hydrated: false,

      // Add product or increase quantity if already exists
      addToCart: (product) => {
        const existing = get().cart.find((item) => item._id === product._id);
        const quantityToAdd = product.quantity || 1;

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + quantityToAdd }
                : item
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: quantityToAdd }],
          });
        }
      },

      removeFromCart: (_id) =>
        set({
          cart: get().cart.filter((item) => item._id !== _id),
        }),

      incrementQuantity: (_id) =>
        set({
          cart: get().cart.map((item) =>
            item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),

      decrementQuantity: (_id) =>
        set({
          cart: get().cart.map((item) =>
            item._id === _id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          ),
        }),

      clearCart: () => set({ cart: [] }),

      // Compute total price of cart
      getTotal: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),

      // Mark hydration complete
      setHydrated: (state) => set({ hydrated: state }),
    }),
    {
      name: "cart-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
