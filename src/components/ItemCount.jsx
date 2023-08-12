import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
  
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
  
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
  
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };
  
    return (
      <div className="itemCount">
        <div className='area-operacion' >
            <button className='btn-sumaResta' onClick={handleDecrement}>-</button>
            <span className='cantidadCompra' >{count}</span>
            <button className='btn-sumaResta' onClick={handleIncrement}>+</button>
        </div>
        <button className="agregarCarrito" onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ItemCount;
