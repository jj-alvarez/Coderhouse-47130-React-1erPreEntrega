import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'

import "./ItemListContainer.css"
import ItemList from './ItemList';


const ItemListContainer = () => {
    
    return (
        <div className='itemList'>
            <div className='il-titulos'> 
                <h2>La Biblioteca Escondida</h2>
                <p>Aqui encontraras todos nuestros productos!</p>
            </div>
            <div className='itemMainArea'>
                <ItemList />
            </div>
        </div>
    );
};
  
export default ItemListContainer;

