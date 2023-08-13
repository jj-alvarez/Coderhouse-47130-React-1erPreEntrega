import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import logoImage from '../assets/img/main-logo-002.png';
import "./MainLogo.css";

const Mainlogo = () => {
    return (
        <div>
            <Link to={`/`}>
                <img src={logoImage} className="logo-lbe-mini" alt="La Biblioteca Escondida" />
            </Link>
        </div>
    )
}

export default Mainlogo;