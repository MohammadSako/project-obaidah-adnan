import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Item = {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  color: string;
  quantity: number;
  totalPrice: number;
};

export type State = {
  items: Item[];
  totalQuantity: number;
  totalAllPrice: number;
};

export type Actions = {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  totalAllItems: (item: Item) => void;
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

      addItem: (item: Item) =>
        set((state) => {
          const itemExists = state.items.some(
            (existingItem) => existingItem.id === item.id
          );

          if (!itemExists) {
            return {
              items: [
                ...state.items,
                {
                  id: item.id,
                  price: item.price,
                  quantity: 1,
                  totalPrice: item.price,
                  title: item.title,
                  image: item.image,
                  color: item.color,
                },
              ],
              totalQuantity: state.totalQuantity + 1,
            };
          } else {
            return {
              items: state.items.map((existingItem) =>
                existingItem.id === item.id
                  ? {
                      ...existingItem,
                      quantity: existingItem.quantity + 1,
                      totalPrice: existingItem.totalPrice + item.price,
                    }
                  : existingItem
              ),
              totalQuantity: state.totalQuantity + 1,
            };
          }
        }),

      removeItem: (id: string) =>
        set((state) => {
          const itemExists = state.items.some(
            (existingItem) => existingItem.id === id
          );

          if (!itemExists) {
            return state;
          } else {
            const updatedItems = state.items
              .map((existingItem) =>
                existingItem.id === id
                  ? {
                      ...existingItem,
                      quantity: existingItem.quantity - 1,
                      totalPrice: existingItem.totalPrice - existingItem.price,
                    }
                  : existingItem
              )
              .filter((existingItem) => existingItem.quantity > 0);

            return {
              items: updatedItems,
              totalQuantity: state.totalQuantity - 1,
            };
          }
        }),

      totalAllItems: () =>
        set((state) => {
          let amount = 0;
          let total = 0;

          state.items.forEach((item) => {
            amount += item.quantity;
            total += item.quantity * item.price;
          });
          return {
            totalQuantity: amount,
            totalAllPrice: total,
          };
        }),
    }),
    { name: "item-store", skipHydration: true }
  )
);
