import { create } from "zustand";

type State = {
  isBackdropOpen: boolean;
  isDeliverdBackdrop: boolean;
  id: string;
};

type Action = {
  setIsBackdropOpen: (open: boolean) => void;
  setIsDeliverdBackdrop: (open: boolean) => void;
  setId: (id: string) => void;
};

type Store = State & Action;

export const useOrderStore = create<Store>((set) => ({
  id: "",
  isBackdropOpen: false,
  isDeliverdBackdrop: false,
  setId: (id) => set({ id }),
  setIsBackdropOpen: (open) => set({ isBackdropOpen: open }),
  setIsDeliverdBackdrop: (open) => set({ isDeliverdBackdrop: open }),
}));
