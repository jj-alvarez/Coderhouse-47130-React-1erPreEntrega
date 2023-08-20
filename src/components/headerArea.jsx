import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import Navbar from './NavBar'
import Mainlogo from './MainLogo'
import CartWidget from './CartWidget'

const HeaderArea = () => {
    return (
        <>
            <div className='header-area'>
                <Mainlogo />
                <Navbar />
                <CartWidget />
            </div>
        </>
    );
};

export default HeaderArea;