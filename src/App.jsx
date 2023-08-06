import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './components/NavBar'
import Mainlogo from './components/MainLogo'
import CartWidget from './components/CartWidget'
import Footer from "./components/Footer"
import MainSection from './components/MainSection'
// import ItemListContainer from './components/ItemListContainer'



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
                <MainSection />
            </div>

            <div className='footer-area'>
                <Footer />
            </div>
        </div>
    </>
  )
}

export default App
