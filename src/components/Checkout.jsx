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
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <div className='renglon'>
                            <p>Nombre</p><input type="text" />
                        </div>
                        <div className='renglon'>
                            <p>Apellido</p><input type="text" />
                        </div>
                        <div className='renglon'>
                            <p>e-mail</p><input type="text" />
                        </div>
                    </div>
                    <div className='botones-footer'>
                        <Link to={`/Cart`}><button className='btn-volver2'>Volver</button></Link>
                        <button className='btn-volver3'>Finalizar</button>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;