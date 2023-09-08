import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ReactStrictMode } from 'react';
import { useState } from 'react';
import { CartContext } from './context/CartContext';

import './index.css';
import './app.css';

import Proximamente from './components/Proximamente';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Finalizar from './components/Finalizar';


function App() {   

    const [carrito, setCarrito] = useState([]);

    return (
        <React.StrictMode>
            <CartContext.Provider value={{carrito, setCarrito}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path="/Proximamente" element={<Proximamente />} /> 
                        <Route path="/Catalogo/:universo" element={<ItemListContainer />} />
                        <Route path="/ItemDetail/:id" element={<ItemDetail />} /> 
                        <Route path="/Checkout" element={<Checkout />} /> 
                        <Route path="/Cart" element={<Cart />} /> 
                        <Route path="/Finalizar" element={<Finalizar />} />
                    </Routes> 
                </BrowserRouter>
            </CartContext.Provider> 
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//<Route path="/Finalizar/:pedidoId" element={<Finalizar />} />
// <Route path="/Finalizar" element={<Finalizar />} />