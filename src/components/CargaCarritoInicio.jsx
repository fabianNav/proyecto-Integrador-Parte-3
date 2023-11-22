/* eslint-disable react/prop-types */
import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import ThemeContext from '../context/ThemeContext'

const CargaCarritoInicio = ({ item }) => {
  const { eliminarProductoCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {
    eliminarProductoCarritoContext(id)
  }

  const { theme } = useContext(ThemeContext)

  return (

    <tr className={`${theme}`}>
      <td>
        <img src={item.foto} alt={item.nombre} width="100" />
      </td>
      <td>{item.nombre}</td>
      <td>${item.precio}</td>
      <td>
        <button className="borrar-producto fas fa-times-circle" onClick={() => handleEliminar(item.id)}></button>
      </td>
    </tr>

  )
}

export default CargaCarritoInicio