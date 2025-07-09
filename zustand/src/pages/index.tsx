import { Button } from "@/components/ui/button"
import { Link, Outlet, useNavigate } from "react-router-dom"

export const PageZustand = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
            <Button>
                <Link to="zustand" className="text-white">
                    Zustand
                </Link>
            </Button>

            <Button onClick={handleGoBack} className="bg-red-500 hover:bg-red-600">
                Go back
            </Button>

            <Outlet />
        </div>
    )
}