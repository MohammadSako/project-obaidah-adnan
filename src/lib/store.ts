import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

// import { createJSONStorage, persist } from "zustand/middleware";

// export const useStore = create(
//   persist(
//     (set, get) => ({
//       selectedProducts: [],
//       setSelectedProducts: (products) => set({ selectedProducts: products }),
//     }),
//     {
//       name: "cart-selection",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

// export const cartStore = create((set) => ({
//   items: [],
//   addToCart: () => set((state) => ({ items: state.items })),
//   increaseCart: () => set((state) => ({ items: state.items + 1 })),
//   ClearTheCart: () => set({ items: [] }),
//   updateCart: (newItems) => set({ items: newItems }),
// }));

export type Item = {
  key: string;
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  color: string;
};

export type State = {
  items: Item[];
};

export type Actions = {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
};

// export const useItemStore = create<State & Actions>()((set) => ({
//   items: [],
//   addItem: (item: Item) =>
//     set((state) => ({
//       items: [...state.items, item],
//     })),
//   removeItem: (id: string) =>
//     set((state) => ({
//       items: state.items.filter((item) => item.id !== id),
//     })),
//   updateItem: (id: string) =>
//     set((state) => ({
//       items: state.items.map((item) => (item.id === id ? { ...item } : item)),
//     })),
// }));

export const useItemStore = create<State & Actions>()(
  persist(
    set => ({
      items: [],
      addItem: (item: Item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateItem: (id: string) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === id ? { ...item } : item)),
        })),
    }),
    { name: 'item-store', skipHydration: true }
  )
)