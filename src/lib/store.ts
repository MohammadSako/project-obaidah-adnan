import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  favorite: Item[];
  totalQuantity: number;
  totalAllPrice: number;
  totalFavQuantity: number;
  totalFavAllPrice: number;
};

export type Actions = {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  addFavorite: (item: Item) => void;
  removeFavorite: (id: string) => void;
  totalAllItems: (item: Item) => void;
};

export const useItemStore = create<State & Actions>()(
  persist(
    (set) => ({
      items: [],
      favorite: [],
      totalQuantity: 0,
      totalAllPrice: 0,
      totalFavQuantity: 0,
      totalFavAllPrice: 0,

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

      addFavorite: (item: Item) =>
        set((state) => {
          const itemExists = state.favorite.some(
            (existingItem) => existingItem.id === item.id
          );

          if (!itemExists) {
            return {
              favorite: [
                ...state.favorite,
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
              totalFavQuantity: state.totalFavQuantity + 1,
            };
          } else {
            return {
              favorite: state.favorite.map((existingItem) =>
                existingItem.id === item.id
                  ? {
                      ...existingItem,
                      quantity: existingItem.quantity + 1,
                      totalPrice: existingItem.totalPrice + item.price,
                    }
                  : existingItem
              ),
              totalFavQuantity: state.totalFavQuantity + 1,
            };
          }
        }),

      removeFavorite: (id: string) =>
        set((state) => {
          const itemExists = state.favorite.some(
            (existingItem) => existingItem.id === id
          );

          if (!itemExists) {
            return state;
          } else {
            const updatedItems = state.favorite
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
              favorite: updatedItems,
              totalFavQuantity: state.totalFavQuantity - 1,
            };
          }
        }),
    }),
    {
      name: "item-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        favorite: state.favorite,
        totalQuantity: state.totalQuantity,
        totalAllPrice: state.totalAllPrice,
      }),
      // skipHydration: true,
    }
  )
);
