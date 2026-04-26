import { Link } from "react-router-dom";
import './navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Portfolio</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    )
}