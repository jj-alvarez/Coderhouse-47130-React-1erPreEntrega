import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'

import "./MainLogo.css";

const Mainlogo = () => {
    return (
        <div>
            <img src="./src/assets/img/main-logo-002.png" className="logo-lbe-mini" alt="La Biblioteca Escondida" />
        </div>
    )
}

export default Mainlogo;