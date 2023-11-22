/* eslint-disable react/prop-types */
import { useContext } from "react"
import CarritoContext from "../context/CarritoContext"




const Card = ( { producto } ) => {
const { agregarCarritoContext } = useContext(CarritoContext)



  const handleComprar = (producto) => {
    agregarCarritoContext(producto)
  }


  return (
  
    <div className="card col-3 m-2 shadow-sm joha-card">
      <img src={producto.foto} className="card-img-top" alt={producto.nombre}/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <ul className="card-text">
          <li>Almacenamiento: {producto.almacenamiento}</li>
          <li>Color: {producto.color}</li>
          <li>Resolucion: {producto.resolucion}</li>
          <li className="costo">${producto.precio}</li>
        </ul>
        <button className="btn btn-primary comprar agregar-carrito" onClick={() => handleComprar(producto)}>Comprar</button>
        <a className="btn btn-primary vermas">Ver mas</a>
      </div>
    </div>


  )
}

export default Card