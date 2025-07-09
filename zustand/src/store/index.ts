import { create } from 'zustand';
import { counterStore } from './counter';
import type { ZustandStore } from '@shared/zustand/types';
import { mediator } from '@shared/mediator';

export const useZustandStore = create<ZustandStore>((...set) => ({
    ...counterStore(...set),
}));

// Subscribe to mediator events
mediator.subscribe("increment", useZustandStore.getState().increment);
mediator.subscribe("decrement", useZustandStore.getState().decrement);
mediator.subscribe("setCount", useZustandStore.getState().setCount);