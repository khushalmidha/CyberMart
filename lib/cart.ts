import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
            total: get().total + item.price,
          });
        } else {
          set({
            items: [...currentItems, { ...item, quantity: 1 }],
            total: get().total + item.price,
          });
        }
      },
      removeItem: (id) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find((i) => i.id === id);
        if (itemToRemove) {
          set({
            items: currentItems.filter((i) => i.id !== id),
            total: get().total - (itemToRemove.price * itemToRemove.quantity),
          });
        }
      },
      updateQuantity: (id, quantity) => {
        const currentItems = get().items;
        const item = currentItems.find((i) => i.id === id);
        if (item) {
          const quantityDiff = quantity - item.quantity;
          set({
            items: currentItems.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
            total: get().total + (item.price * quantityDiff),
          });
        }
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);