import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" end>Головна</NavLink>
                <NavLink to="/biography">Біографія</NavLink>
                <NavLink to="/masterpiece">Картина</NavLink>
                <NavLink to="/gallery">Галерея</NavLink>
            </nav>
        </header>
    )
}
