import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Proximamente from './components/Proximamente.jsx'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import Checkout from './components/Checkout'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/Proximamente" element={<Proximamente />} /> 
                <Route path="/Catalogo/:universo" element={<ItemListContainer/>} />
                <Route path="/ItemDetail/:id" element={<ItemDetail/>} /> 
                <Route path="/Checkout" element={<Checkout/>} /> 
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>,
)

// <Route path="/Catalogo" element={<ItemListContainer/>} />
//<Route path="/Catalogo/:universo" element={<ItemListContainer/>} />