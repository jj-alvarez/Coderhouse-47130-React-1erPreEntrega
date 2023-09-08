import React from 'react';
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