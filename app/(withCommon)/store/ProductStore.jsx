import {create} from 'zustand';

export const useProductStore = create((set, get) => ({
  products: [],          // all products
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),

  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const res = await fetch(`${backendUrl}/api/products`);
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      set({ products: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const res = await fetch(`${backendUrl}/api/products/${id}`);
      if (!res.ok) throw new Error('Failed to fetch product');
      const data = await res.json();

      // Add or update product in products array
      const products = get().products;
      const existingIndex = products.findIndex(p => p._id === id);

      if (existingIndex !== -1) {
        products[existingIndex] = data;
      } else {
        products.push(data);
      }
      
      set({ products });
      return data;
    } catch (error) {
      set({ error: error.message });
      return null;
    } finally {
      set({ loading: false });
    }
  },
}));
