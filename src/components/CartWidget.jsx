import React from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = () => {
    
    const { carrito } = useContext(CartContext); 

    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

    return (
        <div className='carrito'>
            <Link to={`/Cart`}>
                <div className="carrito-icon">
                    <FaShoppingCart size={32} color="#61DBFB" />
                    {totalItems > 0 && <p className="cart-numero">{totalItems}</p>}
                </div>
            </Link>
        </div>
    );
};

export default CartWidget;