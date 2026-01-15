import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-black text-white p-4">
            <nav className="flex gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/admin">Admin</NavLink>
            </nav>
        </header>
    );
}
