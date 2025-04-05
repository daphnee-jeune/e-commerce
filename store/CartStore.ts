import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (loopedItem) => loopedItem.id === item.id
          );
          if (existing) {
            return {
              items: state.items.map((loopedItem) =>
                loopedItem.id === item.id
                  ? {
                      ...loopedItem,
                      quantity: loopedItem.quantity + item.quantity,
                    }
                  : loopedItem
              ),
            };
          }

          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items
              .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter((item) => item.quantity > 0),
          };
        }),
      clearCart: () =>
        set(() => {
          return {
            items: [],
          };
        }),
    }),
    { name: "cart" }
  )
);
