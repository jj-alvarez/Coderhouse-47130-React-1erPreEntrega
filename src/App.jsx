import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
// import './components/NavBar.jsx'
import Navbar from './components/NavBar'
import Mainlogo from './components/MainLogo'
import CartWidget from './components/CartWidget'
import Footer from "./components/Footer"
// import MainSection from './components/MainSection'






function App() {

  return (
    <>
        <div className='sitio'>
            <div className='header-area'>
                <Mainlogo />
                <Navbar />
                <CartWidget />
            </div>

            <div className='main-area'>
                <img src={reactLogo} className="main-logo" alt="React logo" />
                <h1>La Biblioteca Escondida</h1>
                <p className='proximamente'>Pagina en construccion. Subcribite para estar al tanto de nuestras novedades!</p>
                <button className='btn-newsletter'>Newsletter</button>
            </div>

            <div className='footer-area'>
                <Footer />
            </div>
        </div>
    </>
  )
}

export default App
