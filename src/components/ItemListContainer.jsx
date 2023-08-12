import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import "./MainSection.css"
import "./ItemListContainer.css"
import ItemCount from './ItemCount';
import CartWidget from './CartWidget';
import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemListContainer = () => {
    
    return (
      <div className='itemListContainer'>
        <h2>La Biblioteca Escondida</h2>
        <p>Aqui encontraras todos nuestros productos!</p>
        <div className='itemMainArea'>
            <ItemDetail />
        </div>
      </div>
    );
};
  
export default ItemListContainer;

