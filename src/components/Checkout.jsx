import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Checkout = () => {
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-area'>
                        <h2>Carrito de Compras</h2>
                        <p>Sitio en construccion.<br />Proximamente, aquí veras los items de tu carrito de compras.<br />Muchas gracias!</p>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;