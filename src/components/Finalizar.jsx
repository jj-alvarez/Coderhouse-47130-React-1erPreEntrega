import React from 'react';
import './Finalizar.css'
import '../App.css'
import FooterArea from './Footer';
import "./MainLogo.css"
import "./navbar.css";
import "./CartWidget.css"
import logoImage from '../assets/img/main-logo-002.png';
import { FaShoppingCart } from "react-icons/fa";


const Finalizar = () => {

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