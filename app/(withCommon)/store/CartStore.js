import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id)
        const quantityToAdd = product.quantity || 1

        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantityToAdd }
                : item
            ),
          })
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: quantityToAdd }],
          })
        }
      },

      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item.id !== id),
        })
      },

      clearCart: () => set({ cart: [] }),

      getTotal: () =>
        get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: 'cart-storage', // key in localStorage
    }
  )
)
