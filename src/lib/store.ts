import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Item = {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  color: string;
};

export type State = {
  items: Item[];
  totalQuantity: number;
  totalAllPrice: number;
};

export type Actions = {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string) => void;
};

export const useItemStore = create<State & Actions>()(
  persist(
    (set) => ({
      items: [],
      totalQuantity: 0,
      totalAllPrice: 0,

      increaseQuantity: () =>
        set((state) => ({ totalQuantity: state.totalQuantity + 1 })),
      decreaseQuantity: () =>
        set((state) => ({ totalQuantity: state.totalQuantity + 1 })),

      // addItem: (item: Item) =>
      //   set((state) => ({
      //     items: [...state.items, item],
      //   })),

      addItem: (item: Item) =>
        set((state) => {
          const itemExists = state.items.some(
            (existingItem) => existingItem.id === item.id
          );
          if (!itemExists) {
            return { items: [...state.items, item] };
          } else {
            return { totalQuantity: state.totalQuantity + 1 };
          }
        }),

      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateItem: (id: string) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item } : item
          ),
        })),
    }),
    { name: "item-store", skipHydration: true }
  )
);

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

// export const useItemStore = create<State & Actions>()(
//   persist(
//     set => ({
//       items: [],
//       addItem: (item: Item) =>
//         set((state) => ({
//           items: [...state.items, item],
//         })),
//       removeItem: (id: string) =>
//         set((state) => ({
//           items: state.items.filter((item) => item.id !== id),
//         })),
//       updateItem: (id: string) =>
//         set((state) => ({
//           items: state.items.map((item) => (item.id === id ? { ...item } : item)),
//         })),
//     }),
//     { name: 'item-store', skipHydration: true }
//   )
// )
