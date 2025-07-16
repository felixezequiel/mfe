import { MainTitle } from "../components/mainTitle";
import { ActionsZustand } from "../components/actions";
import { useTanstackCounter } from "tanstack_mfe/Store";
import { useLanguage, type LanguageObject } from "winxx-core";

const RecursiveCount = () => {
    const { count } = useTanstackCounter();

    return <span>{count}</span>;
}

export const ZustandPage = () => {
    const { language } = useLanguage();

    const t: LanguageObject = {
        "pt-BR": {
            firstP: "Esta é uma página de exemplo do Zustand MFE.",
            secondP: "Você pode interagir com o contador abaixo.",
            thirdP: "Explore as ações disponíveis para manipular o estado do contador.",
        },
        "en-US": {
            firstP: "This is a sample Zustand MFE page.",
            secondP: "You can interact with the counter below.",
            thirdP: "Explore the available actions to manipulate the counter state.",
        },
        "fr-FR": {
            firstP: "Ceci est une page d'exemple Zustand MFE.",
            secondP: "Vous pouvez interagir avec le compteur ci-dessous.",
            thirdP: "Explorez les actions disponibles pour manipuler l'état du compteur.",
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
            <MainTitle />

            <p className="mt-4">{t[language.code]?.firstP}</p>
            <p className="mt-2">{t[language.code]?.secondP}</p>
            <p className="mt-2">{t[language.code]?.thirdP}</p>

            <ActionsZustand />

            <div className="flex flex-col items-center gap-2">
                <h2 className="text-lg font-semibold">Recursive Zustand Store</h2>
                <p>Count: <RecursiveCount /></p>
            </div>
        </div>
    )
}