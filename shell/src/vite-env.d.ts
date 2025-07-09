/// <reference types="vite/client" />

declare module 'zustand_mfe/App' {
    const App: React.ComponentType;
    export default App;
}

declare module 'zustand_mfe/Store' {
    export const useZustandStore: import('@shared/index').useZustandStore;
}

declare module 'tanstack_mfe/App' {
    const App: React.ComponentType;
    export default App;
}