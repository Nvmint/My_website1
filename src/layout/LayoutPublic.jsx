import { Outlet } from "react-router-dom"

export const LayoutPublic = () => {

    return (
        <>
            <nav>Navbar</nav>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    )
}

