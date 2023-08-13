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
            <Link to={`/Catalogo`} className='btn-ingresar'>Ingresar</Link>
        </>
    );
};

export default MainSection;