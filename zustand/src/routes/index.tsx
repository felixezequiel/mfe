import { PageZustand } from "@/pages";
import { ZustandPage } from "@/pages/zustand";
import { type RouteObject } from "react-router-dom";

export const CoreRoutes: RouteObject[] = [
    {
        path: "/",
        element: <PageZustand />,
        children: [
            {
                path: "zustand",
                element: <ZustandPage />,
            },
        ]
    }
]