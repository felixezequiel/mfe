import type { StoreApi, UseBoundStore } from "zustand";
import type { CounterStore } from "../zustand/types";

export type useTanstackCounter = UseBoundStore<StoreApi<CounterStore>>