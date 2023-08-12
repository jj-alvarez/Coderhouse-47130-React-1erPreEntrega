import "./MainSection.css"
import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

const MainSection = ({ onIngresarClick }) => {
  return (
        <>
            <img src="./src/assets/img/main-logo-002.png" className="main-logo" alt="La Biblioteca Escondida" />
            <h1>La Biblioteca Escondida</h1>
            <Link to={`/Catalogo`}><button className='btn-ingresar' onClick={onIngresarClick}>Ingresar</button></Link>
        </>
    );
};

export default MainSection;