import { type StateCreator } from "zustand";
import type { CounterStore } from "@shared/zustand/types";

export const counterStore: StateCreator<CounterStore> = (set) => ({
    // Define your Zustand store state and actions here
    count: 0,
    
    increment: () => set((state) => { 
        return { count: state.count + 1 }
    }),

    decrement: () => set((state) => { 
        return { count: state.count - 1 }
    }),

    setCount: (value: number) => set(() => ({ count: value })),
});
