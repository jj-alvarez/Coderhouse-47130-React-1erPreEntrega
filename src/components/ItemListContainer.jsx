import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./ItemListContainer.css"
import ItemList from './ItemList';
import Item from './Item';
import '../App.css'
import Navbar from './NavBar'
import Mainlogo from './MainLogo'
import CartWidget from './CartWidget'
import Footer from "./Footer"


const ItemListContainer = () => {
    
    return (
    <>
        <div className='sitio'>
            <div className='header-area'>
                <Mainlogo />
                <Navbar />
                <CartWidget />
            </div>

            <div className='main-area'>
                <div className='itemList'>
                    <div className='il-titulos'> 
                        <h2>La Biblioteca Escondida</h2>
                        <p>Aqui encontraras todos nuestros productos!</p>
                    </div>
                    <div className='itemMainArea'>
                        <Item />
                    </div>
                </div>
            </div>

            <div className='footer-area'>
                <Footer />
            </div>
        </div>
    </>
    );
};
  
export default ItemListContainer;