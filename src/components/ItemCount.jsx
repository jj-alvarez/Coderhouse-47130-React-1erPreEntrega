import React from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'
import "./ItemDetail.css"
import "./ItemCount.css"
import '../App.css'
import "./MainLogo.css";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const agregarACarrito = () => {
        if (count > 0) {
            onAdd(count);
        }
    };
  
    return (
      <div className="itemCount">
        <div className='area-operacion' >
            <button className="btn-sumaResta" onClick={restar} disabled={count === 1}>-</button>
            <span className='cantidadCompra' >{count}</span>
            <button className="btn-sumaResta" onClick={sumar} disabled={count === stock}>+</button>
        </div>
        <button className="agregarCarrito" onClick={agregarACarrito}>Agregar al carrito</button>
        <Link to={`/Cart`} className='btn-carrito'>Ir al carrito</Link>
        <Link to={`/`} className='btn-volver'>Volver al catalogo</Link>
      </div>
    );
  };
  
  export default ItemCount;