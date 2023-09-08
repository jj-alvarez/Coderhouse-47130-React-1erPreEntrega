import React from 'react';
import {Link} from 'react-router-dom'
import "./Item.css"

const Item = ({ libros }) => {
    return (
        <div className='item'>
        {libros.map((libro) => (
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