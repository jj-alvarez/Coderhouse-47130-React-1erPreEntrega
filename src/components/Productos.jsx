import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import "./Productos.css";

function Producto() {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      fetch('./libros.json')
        .then(response => response.json())
        .then(data => setProductos(data))
        .catch(error => console.error('Error fetching productos:', error));
    }, []);
  
    return (
      <div>
        {/* Renderiza los productos */}
      </div>
    );
  }
  
  export default Producto;