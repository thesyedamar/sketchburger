import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img?: string;
}

interface CartStore {
  items: Record<number, CartItem>;
  addItem: (item: Omit<CartItem, "qty">) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: {},
  addItem: (item) =>
    set((s) => ({
      items: {
        ...s.items,
        [item.id]: s.items[item.id]
          ? { ...s.items[item.id], qty: s.items[item.id].qty + 1 }
          : { ...item, qty: 1 },
      },
    })),
  increment: (id) =>
    set((s) => ({
      items: {
        ...s.items,
        [id]: { ...s.items[id], qty: s.items[id].qty + 1 },
      },
    })),
  decrement: (id) =>
    set((s) => {
      const qty = s.items[id]?.qty - 1;
      if (qty <= 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [id]: _deleted, ...rest } = s.items;
        return { items: rest };
      }
      return {
        items: {
          ...s.items,
          [id]: { ...s.items[id], qty },
        },
      };
    }),
  clearCart: () => set({ items: {} }),
  totalItems: () =>
    Object.values(get().items).reduce((s, i) => s + i.qty, 0),
  totalPrice: () =>
    Object.values(get().items).reduce((s, i) => s + i.price * i.qty, 0),
}));