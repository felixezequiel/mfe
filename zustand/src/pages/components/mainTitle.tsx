import { useZustandStore } from "@/store";
import { useLanguage, type LanguageObject } from "winxx-core";

const CounterView = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
}

export const MainTitle = () => {
    const { language } = useLanguage();

    const t: LanguageObject = {
        "pt-BR": {
            title: "Contador da página Zustand",
        },
        "en-US": {
            title: "Zustand Page Counter",
        },
        "fr-FR": {
            title: "Compteur de page Zustand",
        }
    }
    return (
        <h1 className="text-2xl font-bold">
            {t[language.code]?.title} <CounterView />
        </h1>
    )
}