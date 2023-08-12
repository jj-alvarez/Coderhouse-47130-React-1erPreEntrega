import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./ItemDetail.css"
import "./ItemCount.css"
import '../App.css'
import Navbar from './NavBar'
import Mainlogo from './MainLogo'
import CartWidget from './CartWidget'
import Footer from "./Footer"
import ItemCount from './ItemCount';

const ItemDetail = () => {
    const handleAddToCart = (count) => {
        console.log(`Agregando ${count} ítem(s) al carrito`);
    };

    return (
        <>
            <div className='sitio'>
                <div className='header-area'>
                    <Mainlogo />
                    <Navbar />
                    <CartWidget />
                </div>

                <div className='main-area'>
                    <div className='itemDetail'>
                        <img src="./src/assets/img/main-logo-002-black.png" className="" alt="La Biblioteca Escondida" />
                        <h3>item</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit at aliquam odio aut minus fugit quia amet similique tempore veniam corporis ad sit molestiae beatae saepe, consequuntur quaerat laboriosam ex.</p>
                        <ItemCount stock={10} onAdd={handleAddToCart} />
                    </div>
                </div>

                <div className='footer-area'>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ItemDetail;