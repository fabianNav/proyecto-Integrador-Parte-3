import Card from '../components/Card'
import Carousel from '../components/Carousel'
import ProductosContext from '../context/ProductosContext'
import { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

const Inicio = () => {
  const { productos } = useContext(ProductosContext)
  const { theme } = useContext(ThemeContext)


  useEffect(() => {
    document.title = 'Mercado IT - Inicio'
  }, [])



  return (
    
      <main className={`${theme} py-3`}>
        <Carousel />
        <section className="row my-4">
          <div className="container">
            <header className="container m-0">
              <h2 className={`text-center ${theme}`}>
                Mas Comprados
              </h2>
            </header>

            <div className={`container categoria p-3 ${theme} mt-0`}>
              <div className={`row justify-content-around container`}>
                {
                  productos && productos.map(producto => (
                    <Card key={producto.id} producto={producto} />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Inicio