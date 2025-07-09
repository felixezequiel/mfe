import { MainTitle } from "../components/mainTitle";
import { ActionsZustand } from "../components/actions";
import { useTanstackStore } from "tanstack_mfe/Store";

const RecursiveStore = () => {
    const { count } = useTanstackStore();

    return (
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">Recursive Zustand Store</h2>
            <p>Count: {count}</p>
        </div>
    );
}

export const ZustandPage = () => {

    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
            <MainTitle />

            <p className="mt-4">This is a simple Zustand page example.</p>
            <p className="mt-2">You can use Zustand for state management in your React applications.</p>
            <p className="mt-2">Check the Zustand documentation for more details.</p>
            
            <ActionsZustand />

            <RecursiveStore />
        </div>
    )
}