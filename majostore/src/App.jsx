import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="topbar">
        <ul className="topbar-left">
          <li><a href="#">Envio gratis en CABA</a></li>
          <li><a href="#">Venta corporativa/mayorista</a></li>
          <li><a href="https://api.whatsapp.com/send/?phone=%2B541155086584&text&type=phone_number&app_absent=0">Contacto</a></li>
          <li><a href="#">ventas@majostore.com</a></li>
        </ul>
        <ul className="topbar-right">
          <li><a href="#">CUPON STORE $5000 OFF</a></li> 
        </ul> 
      </div>
      <div className="header">
        <div className="mid-bar">
          <div className="logo-container">
           <a href="#hero" className="logo"></a>
          </div>
          <div className="search-bar">  
          <input type="text" placeholder="Buscar productos..." />
          <span className="search-icon">
            <svg className="search-svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </span>
        </div>
        </div>
      </div>
      <nav className="nav-container">
        <div className="nav-links">
          <ul>
            {/*categories dropdown menu*/}
            <li><a href="#Categorias">Categorias</a></li>
            <li><a href="#Celulares">Celulares</a></li>
            <li><a href="#Fundas">Fundas</a></li>
            <li><a href="#Consolas">Consolas</a></li>
            <li><a href="#Tecnología">Tecnología</a></li>
            <li><a href="#Ofertas" className="ofertas">Ofertas</a></li>
          </ul>
        </div>
      </nav>      
      {/* hero section w/carrousel */}
      {/* ------------------------ */}
      {/* produts w/image and categories */}
      {/* Flexbox cards products */}
      {/* Animated carrousel w/brands */}
      {/* Benefits - 4 flexbox cards w/icons */}
      {/* Footer - 4 column footer -> categories -> most searched -> STORE -> INFO, contact COPYRIGHT + company name/logo */}
    </>
  )
}

export default App
