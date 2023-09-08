import React from 'react';
import {Link} from 'react-router-dom'
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-links">
            <Link to={`/`}>Home</Link>
            <Link to="/Catalogo/The Lord Of The Rings">The Lord Of The Rings</Link>
            <Link to="/Catalogo/Warhammer 40.000">Warhammer 40.000</Link>
            <Link to="/Catalogo/Warcraft">Warcraft</Link>
            <Link to={`/Proximamente`}>Proximamente!</Link>
        </div>
    )
}

export default Navbar;