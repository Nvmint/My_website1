import { createBrowserRouter } from "react-router-dom";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { LayoutPublic } from "../layout/LayoutPublic";
import { NotFound } from "../components/NotFound";

export const router = createBrowserRouter([
    {

        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Hero />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ]
    },

])