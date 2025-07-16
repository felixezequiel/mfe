import { Link } from "react-router-dom"

export const ShellPage = () => {

    return (
        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
            <h1>Shell Page</h1>
            
            <button>
                <Link to="/home">
                    Go to Zustand MFE
                </Link>
            </button>
        </div>
    )
}