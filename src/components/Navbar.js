import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <Link to="/" className="title">Website</Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ?"open": ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar