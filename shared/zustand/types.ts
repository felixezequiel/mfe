import type { UseBoundStore, StoreApi } from "zustand";

export type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    setCount: (value: number) => void;
};

export type ZustandStore = CounterStore;

export type useZustandStore = UseBoundStore<StoreApi<ZustandStore>>;