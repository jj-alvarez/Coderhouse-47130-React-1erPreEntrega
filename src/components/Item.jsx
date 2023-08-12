import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import "./MainSection.css"
import "./ItemListContainer.css"
import ItemCount from './ItemCount';
import CartWidget from './CartWidget';
import "./Item.css"


const Item = () => {
    const handleAddToCart = (count) => {
        console.log(`Agregando ${count} ítem(s) al carrito`);
    };
  
    return (
        <div className='item'>
            <img src="./src/assets/img/main-logo-002-black.png" className="logo-lbe-mini" alt="La Biblioteca Escondida" />
            <h3>item</h3>
            <p>info basica</p>
            <ItemCount stock={10} onAdd={handleAddToCart} />
        </div>
    );
  };
  
  export default Item;
