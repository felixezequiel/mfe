import { useZustandStore } from "@/store";

const CounterView = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
}

export const MainTitle = () => {
    return (
        <h1 className="text-2xl font-bold">
            Zustand Page Counter <CounterView /> 
        </h1>
    )
}