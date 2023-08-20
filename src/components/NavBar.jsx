import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-links">
            <Link to={`/`}>Home</Link>
            <Link to={`/Catalogo`}>Catalogo</Link>
            <button>Warcraft</button>
            <Link to={`/Proximamente`}>Proximamente</Link>
            <Link to={`/Proximamente`}>Proximamente</Link>
        </div>
    )
}

export default Navbar;

// <Link to={`The Lord Of The Rings`}>The Lord Of The Rings</Link>
// <Link to={`/Warhammer 40K`}>Warhammer 40K</Link>
// <Link to={`/Warcraft`}>Warcraft</Link>