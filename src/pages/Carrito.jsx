import ItemCarrito from '../components/ItemCarrito'
import CarritoContext from '../context/CarritoContext'

import { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

const Carrito = () => {
  const {
    carrito,
    cantidadTotalArticulosCarritoContext,
    precioTotalArticulosCarritoContext,
    guardarCarritoContext,
    precioTotalSinIvaCarritoContext,
    valorDelIVACarritoContext } = useContext(CarritoContext)



  useEffect(() => {
    document.title = ' Mercado IT - Carrito'
  }, [])

  const { theme } = useContext(ThemeContext)


  return (
    <main className={theme}>
      <section className={`container my-0 ${theme}`}>
        <div className="row d-flex justify-content-center">
          <div className="col-8 prod-carrito">
            <div className="card mb-4 card-carrito">
              <div className="card-header py-4">
                <h5 className="mb-0 text-center">{cantidadTotalArticulosCarritoContext()} Artículos</h5>
              </div>

              <div className="card-body carrito" id="lista-compra">

                {
                  carrito && carrito.map(item => (
                    <ItemCarrito key={item.id} itemProducto={item} />
                  )) 
                }


              </div>
            </div>

            <div className="card mb-4 position-sticky top-50">
              <div className="card-body tarjetas">
                <p><strong>Métodos de pago aceptados</strong></p>
                <img src="/img/logos/American_Express-Logo.wine.svg" alt="American Express"
                  className="me-2 met-pago" />
                <img src="/img/logos/Mastercard-Logo.wine.svg" alt="Mastercard" className="me-2 met-pago" />
                <img src="/img/logos/Visa_Inc.-Logo.wine.svg" alt="Visa" className="me-2 met-pago" />
                <img src="/img/logos/PayPal-Logo.wine.svg" alt="PayPal" className="me-2 met-pago" />
              </div>
            </div>
          </div>



          <div className="col-4">
            <div className="card mb-4 div-resumen-carr">
              <div className="card-header py-3">
                <h5 className="mb-0">Resumen carrito</h5>
              </div>
              <div className="card-body resumen-carr">
                <ul>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>Productos</h6>
                    <h6>${precioTotalSinIvaCarritoContext()} </h6>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <h6>Envío Gratis</h6>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <h6>IVA</h6>
                    <h6><strong>{valorDelIVACarritoContext().toFixed(2)}</strong></h6>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6><strong>${precioTotalArticulosCarritoContext().toFixed(2)}</strong></h6>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary comprar" id='pagar' onClick={guardarCarritoContext}>Comprar</button>

              </div>
            </div>

          </div>

        </div>

      </section>
    </main>
  )
}

export default Carrito