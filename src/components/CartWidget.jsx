import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <>
            <Link to={`/Checkout`}>
                <div className="carrito-icon">
                    <FaShoppingCart size={32} color="#61DBFB" />
                    <p className="cart-numero">0</p>
                </div>
            </Link>
        </>
    );
};

export default CartWidget;