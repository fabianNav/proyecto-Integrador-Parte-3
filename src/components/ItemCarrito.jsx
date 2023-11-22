/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './ItemCarrito.css'
import { useContext, useEffect, useState } from 'react'
import { useForms } from '../hooks/useForms'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({ itemProducto }) => {

  const { cambiarCantidadCarritoContext, eliminarProductoCarritoContext } = useContext(CarritoContext)

  const [total, setTotal] = useState(itemProducto.precio * itemProducto.cantidad)



  const [cantidadInput, handleChange] = useForms({
    cantidad: itemProducto.cantidad
  })



  useEffect(() => {            // para que se cambie el calculo al mismo tiempo que incremento o decremento el valor del input
    let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
    setTotal(totalRecalculado)
    itemProducto.cantidad = cantidadInput.cantidad         //al itemProducto le guardamos la nueva cantidad!!
    cambiarCantidadCarritoContext(itemProducto)
  }, [cantidadInput.cantidad])    //referencia





  return (
    <div className='row p-3 mb-3 arti'>
      <div className="col-3 mb-1">
        <div className="bg-image rounded">
          <img className="w-100" src={itemProducto.foto} alt={itemProducto.nombre} />
        </div>
      </div>
      <div className="col-6 pt-1">
        <p className="mb-4"><strong>{itemProducto.nombre}</strong></p>
        <h6 className="mt-4 carac">Precio</h6>
        <h6 className="mt-4">Color</h6>
        <h6 className="mt-4 carac">Caracteristica</h6>

        <button
          className="btn-sm me-1 mb-2 fs-4 fa-solid fa-trash-can text-danger btn-borrar"
          onClick={() => { eliminarProductoCarritoContext(itemProducto.id) }}>
        </button>
      </div>

      <div className="col-3">
        <input
          min="1"
          type="number"
          className="form-control p-1 text-center"
          placeholder="Cantidad"
          name="cantidad"
          value={cantidadInput.cantidad}
          onChange={handleChange}
        />
        <h6 className="text-center mt-3 precio carac">
          <strong>${total}</strong>
        </h6>
        <h6 className="text-center mt-4">
          <strong>{itemProducto.color}</strong>
        </h6>
        <h6 className="text-center mt-4 carac">
          <strong>{itemProducto.caracteristica1}</strong>
        </h6>
      </div>
    </div>
  )
}

export default ItemCarrito