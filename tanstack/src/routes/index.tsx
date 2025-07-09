import type { RouteObject } from "react-router-dom";
import { TanstackPage } from "@/pages";

export const CoreRoutes: RouteObject[] = [
    {
        path: "/*",
        element: <TanstackPage />
    }
]