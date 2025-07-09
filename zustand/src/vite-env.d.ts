/// <reference types="vite/client" />
declare module 'tanstack_mfe/Store' {
    const useTanstackCounter: import('@shared/index').useTanstackCounter;
    const useHarryPotterStore: import('@shared/tanstack/harryPotter').useHarryPotterStore;

    export {
        useTanstackCounter,
        useHarryPotterStore
    };
}