import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="topbar">
        <ul>
          <li><a href="#">Envio gratis en CABA</a></li>
          <li><a href="#">Venta corporativa/mayorista</a></li>
          <li><a href="https://api.whatsapp.com/send/?phone=%2B541155086584&text&type=phone_number&app_absent=0">Contacto</a></li>
          <li><a href="#">ventas@majostore.com</a></li>
        </ul>
        <ul className="topbar-right">
          <li><a href="#">Cupon STORE $5000 OFFa</a></li> 
        </ul> 
      </div>
      <div className="header">
        <div className="logo-container"></div>
          <a href="#hero">Logo</a>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
        </div>
      </div>
      <nav className="nav">
        <div className="nav-links">
          <ul>
            <li><a href="#Categorias">Categorias</a></li>
            <li><a href="#Celulares">Celulares</a></li>
            <li><a href="#Fundas">Fundas</a></li>
            <li><a href="#Consolas">Consolas</a></li>
            <li><a href="#Tecnología">Tecnología</a></li>
            <li><a href="#Ofertas">Ofertas</a></li>
          </ul>
        </div>
      </nav>      
    </>
  )
}

export default App
