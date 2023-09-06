import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

import './Cart.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Cart = () => {

    const { carrito, setCarrito } = useContext(CartContext);

    const restarCantidad = (libroId) => {
        const libroEnCarrito = carrito.find((item) => item.id === libroId);
        if (libroEnCarrito) {
            if (libroEnCarrito.cantidad > 1) {
                const updatedCarrito = carrito.map((item) =>
                    item.id === libroId ? { ...item, cantidad: item.cantidad - 1 } : item
                );
                setCarrito(updatedCarrito);
            } else {
                console.log("La cantidad mínima permitida es 1.");
            }
        }
    };

    const sumarCantidad = (libroId) => {
        const libroEnCarrito = carrito.find((item) => item.id === libroId);
        if (libroEnCarrito) {
            if (libroEnCarrito.cantidad < libroEnCarrito.stock) {
                const updatedCarrito = carrito.map((item) =>
                    item.id === libroId ? { ...item, cantidad: item.cantidad + 1 } : item
                );
                setCarrito(updatedCarrito);
            } else {
                console.log("La cantidad seleccionada supera el stock disponible.");
            }
        }
    };

    const eliminarLibro = (libroId) => {
        const updatedCarrito = carrito.filter(item => item.id !== libroId);
        setCarrito(updatedCarrito);
    };

    const calcularPrecioTotal = () => {
        return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    console.log(carrito);

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='cart-titulos'>
                        <h2>Carrito de Compras</h2>
                        <p>Aqui veras todos los productos de tu carrito</p>
                    </div>
                    
                    <div className='cart-area'>
                        {carrito.length === 0 ? (
                        <p>No tienes libros dentro del carrito</p>
                        ) : (
                        <table className='cart-table'>
                        <thead>
                        <tr>
                            <th>Tapa</th>
                            <th>Titulo</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {carrito.map(libro => (
                            <tr key={libro.id}>
                                <td><img src={libro.foto} alt={libro.titulo} className='cart-book-image' /></td>
                                <td>{libro.titulo}</td>
                                <td>
                                    <button className='btn-op-cart-l' onClick={() => restarCantidad(libro.id)}>-</button>
                                    {libro.cantidad}
                                    <button className='btn-op-cart-r' onClick={() => sumarCantidad(libro.id)}>+</button>
                                </td>
                                <td>${libro.precio * libro.cantidad}</td>
                                <td>
                                    <button className='btn-op-cart-x' onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        )}
                        {carrito.length > 0 && <p className='cart-total'>Total: ${calcularPrecioTotal()}</p>}
                        {carrito.length > 0 && <Link to={`/Checkout`}><button className='btn-avanzarCompra1'>Continuar</button></Link>}
                    </div>
                    
                    <div className='botones-footer'>
                    <Link to={`/`}><button className='btn-volver2a'>Volver al Catalogo</button></Link>
                    
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Cart;