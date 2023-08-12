import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'

import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <>
        <div className="carrito-icon">
            <FaShoppingCart size={32} color="#61DBFB" />
            <p className="cart-numero">0</p>
        </div>
    </>
  );
};

export default CartWidget;