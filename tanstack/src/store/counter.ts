import { create } from "zustand";
import type { CounterStore } from "@shared/index";

export const useTanstackCounter = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setCount: (value: number) => set(() => ({ count: value }))
}));