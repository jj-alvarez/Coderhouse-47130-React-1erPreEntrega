import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import '../App.css'
import Navbar from './NavBar'
import Mainlogo from './MainLogo'
import CartWidget from './CartWidget'
import Footer from "./Footer"

import './Proximamente.css'

const Proximamente = () => {
  
    return (
        <>
            <div className='sitio'>
                <div className='header-area'>
                    <Mainlogo />
                    <Navbar />
                    <CartWidget />
                </div>

                <div className='main-area'>
                    <div className='proximamente-area'>
                        <h2>Proximamente</h2>
                        <p>Sitio en construccion. En breve podras conocer todo nuestro catalogo.<br />Muchas gracias!</p>
                    </div>
                </div>

                <div className='footer-area'>
                    <Footer />
                </div>
            </div>
        </>
    )
};
  
export default Proximamente;