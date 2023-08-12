import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'

import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-links">
            <a href="/">Home</a>
            <a href="">Tolkien</a>
            <a href="">Proximamente</a>
            <a href="">Proximamente</a>
            <a href="">Proximamente</a>
        </div>
    )
}

export default Navbar;

// <a href="/">Home</a>
// <a href="">Historia</a>
// <a href="">Diseño</a>
// <a href="">Musica</a>
// <a href="">Programacion</a>

