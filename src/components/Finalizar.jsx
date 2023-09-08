import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Finalizar.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';
import "./MainLogo.css"
import "./navbar.css";
import "./CartWidget.css"
import logoImage from '../assets/img/main-logo-002.png';
import { FaShoppingCart } from "react-icons/fa";


import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Finalizar = () => {
    // Obtener el ID del pedido de los parámetros de la URL
    const { pedidoId } = useParams();

    return (
        <>
            <div className='sitio'>
                
                <div className='header-area'>
                    <img src={logoImage} className="logo-lbe-mini" alt="La Biblioteca Escondida" />
                    <div className="navbar-links">
                        <a>Home</a>
                        <a>The Lord Of The Rings</a>
                        <a>Warhammer 40.000</a>
                        <a>Warcraft</a>
                        <a>Proximamente!</a>
                    </div>
                    <div className='carrito'>
                        
                            <div className="carrito-icon">
                                <FaShoppingCart size={32} color="#61DBFB" />
                                
                            </div>
                        
                    </div>
                </div>


                <div className='main-area'>
                    <div className='finalizar-titulos'>
                        <h2>Muchas Gracias</h2>
                        <p>Los esperamos nuevamente</p>
                    </div>
                    <div className='botones-footer'>
                        <button className='btn-volver2'><a href="/">Volver al home</a></button>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};

export default Finalizar;

/*
const Finalizar = () => {
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='finalizar-titulos'>
                        <h2>Muchas Gracias</h2>
                        <p>Se ha enviado un correo electrico con toda la informacion de la Orden #47130.</p>
                    </div>
                    <div className='botones-footer'>
                        <button className='btn-volver2'><a href="/">Volver al home</a></button>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};
*/