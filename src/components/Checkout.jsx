import React from 'react';
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Checkout.css'
import '../App.css'
import HeaderArea from './headerArea';
import FooterArea from './Footer';

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [okVisible, setOkVisible] = useState(false); 


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Compra efectuada por:", {nombre, apellido, email});
        setOkVisible(true);
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setEmail("");
    };

    return (
        <>
            <div className='sitio'>
                <HeaderArea />

                <div className='main-area'>
                    <div className='checkout-titulos'>
                        <h2>Finalizar Compra</h2>
                        <p>Ingresa tus datos para finalizar la compra</p>
                    </div>
                    <div className='checkout-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='renglon'>
                                <p>Nombre</p><input type="text" onChange={handleNombre} value={nombre} placeholder='Juan'required/>
                            </div>
                            <div className='renglon'>
                                <p>Apellido</p><input type="text" onChange={handleApellido} value={apellido} placeholder='Perez'required/>
                            </div>
                            <div className='renglon'>
                                <p>e-mail</p><input type="email" onChange={handleEmail} value={email} placeholder='juan.perez@gmail.com'required method="post"/>
                            </div>
                            {okVisible ? (
                                <Link to={`/Finalizar`}>
                                    <button 
                                        onClick={() => {
                                            resetForm();
                                            setOkVisible(false);
                                        }}className="btn-volver333">Finalizar
                                    </button>  
                                </Link>
                            ) : (
                                <button type="submit" className="btn-volver33">
                                    Comprar
                                </button>
                            )}
                        </form>
                    </div>
                    {!okVisible && (
                        <div className='botones-footer'>
                            <Link to={`/Cart`}>
                                <button className='btn-volver22'>Volver a Carrito</button>
                            </Link>
                        </div>
                    )}
                </div>

                <FooterArea />
            </div>
        </>
    );
};
  
export default Checkout;