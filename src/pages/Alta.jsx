import { useState, useEffect, useContext } from 'react'
import FormAlta from '../components/FormAlta'
import TableAlta from '../components/TableAlta'
import ThemeContext from '../context/ThemeContext'



const Alta = () => {

  const [productoAEditar, setProductoAEditar] = useState(null)       // esto es para el producto a modificar


  useEffect(() => {
    document.title = ' Mercado IT - Alta'
  }, [])

  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme}>
      <div className={`container mt-0 ${theme}`}>
        <h1 className='display-2 mt-3 color-titulo'>Alta de productos</h1>

        <FormAlta productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />

        <TableAlta setProductoAEditar={setProductoAEditar} />

      </div>
    </main>
  )
}

export default Alta