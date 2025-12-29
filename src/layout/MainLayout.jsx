
import { Outlet, NavLink } from "react-router-dom";

export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gray-900 text-white p-4 flex gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </header>

            <main className="flex-1 p-6">
                <Outlet />
            </main>

            <footer className="bg-gray-200 p-4 text-center">
                © My Shop
            </footer>
        </div>
    );
}
