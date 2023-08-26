import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Finalizar.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Finalizar = () => {
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='finalizar-titulos'>
                        <h2>Muchas Gracias</h2>
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