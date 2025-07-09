import { useZustandStore } from "zustand_mfe/Store";
import { ListCharacters } from "./components/listcharacters";

const CounterView = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
};

export const TanstackPage = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col gap-4">
            <h1 className="text-3xl font-bold">
                Tanstack MFE <CounterView />
            </h1>

            <ListCharacters />
        </div>
    );
}