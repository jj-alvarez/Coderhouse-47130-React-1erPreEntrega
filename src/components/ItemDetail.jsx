import React, { useContext } from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import "./ItemDetail.css"
import "./ItemCount.css"
import '../App.css'
import "./MainLogo.css";
import ItemCount from './ItemCount';
import librosData from './libros.json';
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const ItemDetail = () => {

    const { carrito, setCarrito } = useContext(CartContext);
    
    const agregarACarrito = (count) => {
        const libroEnCarrito = carrito.find(item => item.id === book.id);
        
        if (libroEnCarrito) {
            const updatedCarrito = carrito.map(item =>
                item.id === book.id ? { ...item, cantidad: item.cantidad + count } : item
            );
            setCarrito(updatedCarrito);
        } else {
            setCarrito([...carrito, { ...book, cantidad: count }]);
        }
    };

    // set time out

    const { id } = useParams(); 
    
    const [book, setBook] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const selectedBook = librosData.find(libro => libro.id.toString() === id);
            setBook(selectedBook);
        }, 1000);
    }, [id]);
   
    console.log(carrito);

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='itemDetail'>
                        {book ? (
                            <div className='infoGeneral'>
                                <img src={book.foto} alt={book.titulo} />
                                <h2>{book.titulo}</h2>
                                <p>Autor: {book.autor}</p>
                                <p>Universo: {book.universo}</p>
                                <p className='precioItem'>Precio: ${book.precio}</p>
                                <article>{book.info}</article>
                            </div>
                        ) : (
                            <p>Cargando detalles del libro seleccionado...</p>
                        )}
                        <ItemCount stock={10} onAdd={agregarACarrito} />
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    );
};

export default ItemDetail;