import { useZustandStore } from "zustand_mfe/Store";

const CounterView = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
}

export const TanstackPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <h1 className="text-3xl font-bold">
                Tanstack MFE <CounterView />
            </h1>
        </div>
    );
}