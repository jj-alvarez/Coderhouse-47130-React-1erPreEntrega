import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Cart.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Cart = () => {
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='cart-titulos'>
                        <h2>Carrito de Compras</h2>
                        <p>Aqui veras todos los productos de tu carrito</p>
                    </div>
                    <div className='cart-area'>
                    

                    </div>
                    <div className='botones-footer'>
                    <Link to={`/`}><button className='btn-volver2'>Volver al Catalogo</button></Link>
                    <Link to={`/Checkout`}><button className='btn-avanzarCompra'>Continuar</button></Link>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Cart;