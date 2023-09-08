import React from 'react';
import '../App.css'
import './Proximamente.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Proximamente = () => {
  
    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='proximamente-area'>
                        <h2>Proximamente</h2>
                        <p>Sitio en construccion.<br />En breve podras conocer todo nuestro catalogo.<br />Muchas gracias!</p>
                    </div>
                </div>

                <FooterArea />
            </div>
        </>
    )
};
  
export default Proximamente;