import { create } from "zustand";
import { counterStore } from "./counter";
import type { CounterStore } from "@shared/index";
import { mediator } from "@shared/mediator";

export const useTanstackStore = create<CounterStore>((...set) => ({
    ...counterStore(...set)
}));

// Subscribe to mediator events
mediator.subscribe("increment", useTanstackStore.getState().increment);
mediator.subscribe("decrement", useTanstackStore.getState().decrement);
mediator.subscribe("setCount", useTanstackStore.getState().setCount);