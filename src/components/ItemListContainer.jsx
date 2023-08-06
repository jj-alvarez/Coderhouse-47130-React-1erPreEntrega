import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import "./MainSection.css"
import "./ItemListContainer.css"
import ItemCount from './ItemCount';
import CartWidget from './CartWidget';

const ItemListContainer = () => {
    const handleAddToCart = (count) => {
        console.log(`Agregando ${count} ítem(s) al carrito`);
    };
  
    return (
      <div className='itemListContainer'>
        <h2>La Biblioteca Escondida</h2>
        <p>Aqui encontraras todos nuestros productos!</p>
        <div className='itemMainArea'>
            <ItemCount stock={10} onAdd={handleAddToCart} />
            <ItemCount stock={10} onAdd={handleAddToCart} />
            <ItemCount stock={10} onAdd={handleAddToCart} />
            <ItemCount stock={10} onAdd={handleAddToCart} />
            <ItemCount stock={10} onAdd={handleAddToCart} />
            <ItemCount stock={10} onAdd={handleAddToCart} />
        </div>
      </div>
    );
  };
  
  export default ItemListContainer;

