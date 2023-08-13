import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'
import librosData from './libros.json';

import "./Item.css"


const Item = () => {
  
    return (
        <div className='item'>
            {librosData.map((libro) => (
                <div key={libro.id} className='product'>
                    <img src={libro.foto} alt={libro.titulo} />
                    <h2>{libro.titulo}</h2>
                    <p>Autor: {libro.autor}</p>
                    <p>Universo: {libro.universo}</p>
                    <p>Precio: ${libro.precio}</p>
                    <Link to={`/ItemDetail/${libro.id}`} className='btn-masInfo'>Mas informacion</Link>
                </div>
            ))}
        </div>
    );
};
  
export default Item;