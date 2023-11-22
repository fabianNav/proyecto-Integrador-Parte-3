/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ProductosProvider } from './context/ProductosContext'
import { CarritoProvider } from './context/CarritoContext'
import Alta from './pages/Alta'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ProductosProvider>
      <CarritoProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/alta' element={<Alta />} />
              <Route path='*' element={<NoEncontrada />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </CarritoProvider>
    </ProductosProvider>

  </React.StrictMode >,
)
