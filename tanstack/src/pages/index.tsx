import { useZustandStore } from "zustand_mfe/Store";
import { ListCharacters } from "./components/listcharacters";
import { useLanguage, type LanguageObject } from "winxx-core";

const CounterView = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
};

export const TanstackPage = () => {
    const { language } = useLanguage();

    const t: LanguageObject = {
        "pt-BR": {
            title: "Página Tanstack MFE",
        },
        "en-US": {
            title: "Tanstack MFE Page",
        },
        "fr-FR": {
            title: "Page Tanstack MFE",
        }
    }
    
    return (
        <div className="flex h-screen w-screen items-center justify-center flex-col gap-4">
            <h1 className="text-3xl font-bold">
                {t[language.code]?.title} <CounterView />
            </h1>

            <ListCharacters />
        </div>
    );
}