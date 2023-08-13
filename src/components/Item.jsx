import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./Item.css"


const Item = () => {
  
    return (
        <div className='item'>
            <img src="./src/assets/img/main-logo-002-black.png" className="" alt="La Biblioteca Escondida" />
            <h3>item</h3>
            <Link to={`/Item`} className='btn-masInfo'>Mas Informacion</Link>
        </div>
    );
};
  
export default Item;



