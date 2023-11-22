/* eslint-disable react/prop-types */
import { useContext } from 'react'
import TableRowAlta from './TableRowAlta'
import ProductosContext from '../context/ProductosContext'
import ThemeContext from '../context/ThemeContext'

const TableAlta = ({ setProductoAEditar }) => {

  const { productos } = useContext(ProductosContext)

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme}`}>
      <h2 className='mt-5 color-titulo'>Tabla de productos</h2>

      <table className={`mb-2 ${theme}`}>
        <thead>
          <tr className='tr-alta'>
            <th>Nombre</th>
            <th>Color</th>
            <th>Almacenamiento</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos && productos.map(producto => (
              <TableRowAlta key={`${producto.id}-${producto.nombre}`} producto={producto} setProductoAEditar={setProductoAEditar} />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default TableAlta