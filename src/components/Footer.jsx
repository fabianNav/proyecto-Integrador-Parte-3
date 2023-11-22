import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={theme}>
      <address className="justify-content-center">
        <div className="footer justify-content-center">
          <ul>
            <li id="facebook"><a to="https://www.facebook.com/">
              <span className="icono"><a to="https://www.facebook.com/" target="_blank"><i
                className="fa-brands fa-facebook fa-lg"></i></a></span>
              <a to="https://www.facebook.com/" target="_blank" className="titulo" id="tface">facebook</a></a>
            </li>
            <li id="instagram"><a to="https://www.instagram.com" target="_blank">
              <span className="icono"><a to="https://www.instagram.com/" target="_blank"><i
                className="fa-brands fa-instagram fa-lg"></i></a></span>
              <a to="https://www.instagram.com/" target="_blank" className="titulo" id="tinsta">instagram</a></a>
            </li>
            <li id="twitter"><a to="https://twitter.com/?lang=es" target="_blank">
              <span className="icono"><a to="https://twitter.com/?lang=es" target="_blank"><i
                className="fa-brands fa-twitter fa-lg"></i></a></span>
              <a className="titulo" id="ttwitt">twitter</a></a>
            </li>
            <li id="tiktok"><a to="https://www.tiktok.com/es/" target="_blank">
              <span className="icono"><a to="https://www.tiktok.com/es/" target="_blank"><i
                className="fa-brands fa-tiktok fa-lg"></i></a></span>
              <a className="titulo" id="ttik">tiktok</a></a>
            </li>
            <li id="telegram"><a to="https://telegram.org/" target="_blank">
              <span className="icono"><a to="https://telegram.org/" target="_blank"><i
                className="fa-brands fa-telegram fa-lg"></i></a></span>
              <a className="titulo" id="ttel">telegram</a></a>
            </li>
            <li id="whatsapp"><a to="https://www.whatsapp.com/?lang=es_LA" target="_blank">
              <span className="icono"><a to="https://www.whatsapp.com/?lang=es_LA" target="_blank"><i
                className="fa-brands fa-whatsapp fa-lg"></i></a></span>
              <a className="titulo" id="twhat">whatsapp</a></a>
            </li>
            <li id="linkedin"><a to="https://www.linkedin.com/home" target="_blank">
              <span className="icono"><a to="https://www.linkedin.com/home" target="_blank"><i
                className="fa-brands fa-linkedin fa-lg"></i></a></span>
              <a className="titulo" id="tlink">linkedin</a></a>
            </li>
            <li id="youtube"><a to="https://www.youtube.com/" target="_blank">
              <span className="icono"><a to="https://www.youtube.com/" target="_blank"><i
                className="fa-brands fa-youtube fa-lg"></i></a></span>
              <a className="titulo" id="tyout">youtube</a></a>
            </li>
          </ul>
        </div>
        <div className="slider">
          <div className="slider-track">
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Amazon_Pay-Logo.wine.svg" alt="Amazon Pay" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/American_Express-Logo.wine.svg" alt="American Express" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/BBVA_USA-Logo.wine.svg" alt="BBVA" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Binance-Logo.wine.svg" alt="Binance" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Grupo_Financiero_Galicia-Logo.wine.svg" alt="Galicia" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/HSBC-Logo.wine.svg" alt="HSBC" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Mastercard-Logo.wine.svg" alt="Mastercard" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/MercPago.svg" alt="MercadoPago" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/naranja.svg" alt="Naranja" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/PagoFacil.svg" alt="Pago Facil" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/PayPal-Logo.wine.svg" alt="PayPal" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/RapiPago.svg" alt="RapiPago" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Santander_Bank-Logo.wine.svg" alt="Santander Rios" />
            </div>
            <div className="footer justify-content-center slide">
              <img src="/img/logos/Visa_Inc.-Logo.wine.svg" alt="Visa" />
            </div>
          </div>
        </div>
      </address>
    </footer>

  )
}

export default Footer