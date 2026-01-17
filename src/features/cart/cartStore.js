import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
    persist(
        (set, get) => ({
            items: [],
            addItem: (newItem) =>
                set((state) => {
                    const existing = state.items.find((i) => i.id === newItem.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
                            ),
                        };
                    }
                    return { items: [...state.items, { ...newItem, quantity: 1 }] };
                }),
            removeItem: (id) =>
                set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
            updateQuantity: (id, quantity) =>
                set((state) => ({
                    items: state.items.map((i) =>
                        i.id === id ? { ...i, quantity } : i
                    ),
                })),
            getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
            getTotalPrice: () =>
                get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
);