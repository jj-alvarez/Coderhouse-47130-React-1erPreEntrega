import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Proximamente from './components/Proximamente.jsx'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/Proximamente" element={<Proximamente />} /> 
                <Route path="/Catalogo" element={<ItemListContainer/>} /> 
                <Route path="/Item" element={<ItemDetail/>} /> 
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>,
)