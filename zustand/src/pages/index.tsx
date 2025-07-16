import { Button } from "@/components/ui/button"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useLanguage, type LanguageObject } from "winxx-core";

export const PageZustand = () => {
    const { language } = useLanguage();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const t: LanguageObject = {
        "pt-BR": {
            title: "Página Zustand MFE",
        },
        "en-US": {
            title: "Zustand MFE Page",
        },
        "fr-FR": {
            title: "Page Zustand MFE",
        }
    }

    return (
        <div className='w-full flex items-center justify-center flex-col gap-4'>
            <Button>
                <Link to="zustand" className="text-white">
                    Zustand
                </Link>
            </Button>

            <Button onClick={handleGoBack}>
                {t[language.code]?.title || "Go Back"}
            </Button>

            <Outlet />
        </div>
    )
}