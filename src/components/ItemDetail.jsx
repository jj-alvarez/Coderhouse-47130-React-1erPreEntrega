import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'

import "./ItemDetail.css"

const ItemDetail = () => {
    const handleAddToCart = (count) => {
        console.log(`Agregando ${count} ítem(s) al carrito`);
    };

    return (
        <div className='itemDetail'>
            <img src="./src/assets/img/main-logo-002-black.png" className="" alt="La Biblioteca Escondida" />
            <h3>item</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed porro ad molestiae autem.</p>
            <ItemCount stock={10} onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemDetail;