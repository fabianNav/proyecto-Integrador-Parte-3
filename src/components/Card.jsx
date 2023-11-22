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
          <li>{producto.caracteristica1}</li>
          <li>COLOR {producto.color}</li>
          <li>{producto.caracteristica2}</li>
          <li className="costo">${producto.precio}</li>
        </ul>
        <button className="btn btn-primary comprar agregar-carrito" onClick={() => handleComprar(producto)}>Comprar</button>
        <a className="btn btn-primary vermas">Ver mas</a>
      </div>
    </div>


  )
}

export default Card