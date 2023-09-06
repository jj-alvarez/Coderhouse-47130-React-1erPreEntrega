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
//import librosData from './libros.json';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/client';
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const ItemDetail = () => {
    const { carrito, setCarrito } = useContext(CartContext);
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const librosCollection = collection(db, 'libros');
            const librosQuery = query(librosCollection, where('id', '==', parseInt(id)));
            const librosSnapshot = await getDocs(librosQuery);
            const libroData = librosSnapshot.docs[0].data();
            setBook(libroData);
        };

        fetchData();
    }, [id]);

    const agregarACarrito = (count) => {
        if (count > 0 && count <= book.stock) {
            const libroEnCarrito = carrito.find((item) => item.id === book.id);
    
            if (libroEnCarrito) {
                const updatedCarrito = carrito.map((item) =>
                    item.id === book.id ? { ...item, cantidad: item.cantidad + count } : item
                );
                setCarrito(updatedCarrito);
            } else {
                setCarrito([...carrito, { ...book, cantidad: count }]);
            }
        } else {
            alert("La cantidad seleccionada supera el stock disponible.");
        }
    };

    console.log(carrito);
    
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    {book && (
                        <div className='itemDetail'>
                            <div className='infoGeneral'>
                                <img src={book.foto} alt={book.titulo} />
                                <h2>{book.titulo}</h2>
                                <p>Autor: {book.autor}</p>
                                <p>Universo: {book.universo}</p>
                                <p className='precioItem'>Precio: ${book.precio}</p>
                                <article>{book.info}</article>
                            </div>
                            <ItemCount stock={book ? book.stock : 0} onAdd={agregarACarrito} />
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};

export default ItemDetail;