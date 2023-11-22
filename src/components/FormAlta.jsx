/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './FormAlta.css'
import { useContext, useEffect, useState } from 'react'
import ProductosContext from '../context/ProductosContext'



const FormularioInicial = {
  "id": null,
  "nombre": '',
  "color": '',
  "resolucion": '',
  "almacenamiento": '',
  "precio": '',
  "foto": '',
}


const FormAlta = ({ productoAEditar, setProductoAEditar }) => {
  //console.log(setProductoAEditar)

  const [formAlta, setFormAlta] = useState(FormularioInicial)

  const { agregarProducto, modificarProducto } = useContext(ProductosContext)


  //useeffect(que es para que se me cargue en el form el usuario que apreto para editar..)
  useEffect(() => {
    productoAEditar ? setFormAlta(productoAEditar) : setFormAlta(FormularioInicial)
  }, [productoAEditar])




  const handleChange = (e) => {
    setFormAlta({
      ...formAlta,    //lo que ya tenia mas lo que se esta escribiendo en el input
      [e.target.name]: e.target.value
    })
    // console.log(formAlta)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (formAlta.id === null) {
      agregarProducto(formAlta)
    } else {
      modificarProducto(formAlta)
      //console.log(modificarProducto)
    }
    handleReset()
  }



  const handleReset = (e) => {
    setFormAlta(FormularioInicial)
    setProductoAEditar(null)
  }



  return (
    <>
      <h3 className='color-titulo'>{formAlta.id ? 'Editar' : 'Agregar'}</h3>
      <form className='mt-3' onSubmit={handleSubmit} >
        <input
          type="text"
          name='nombre'
          placeholder='Ingrese el nombre'
          onChange={handleChange}
          value={formAlta.nombre}
        />

        <input
          type="text"
          name='resolucion'
          placeholder='Ingrese la resolucion'
          onChange={handleChange}
          value={formAlta.resolucion}
        />

<input
          type="text"
          name='color'
          placeholder='Ingrese el color'
          onChange={handleChange}
          value={formAlta.color}
        />

        <input
          type="text"
          name='almacenamiento'
          placeholder='Ingrese el almacenamiento'
          onChange={handleChange}
          value={formAlta.almacenamiento}
        />

        <input
          type="number"
          name='precio'
          placeholder='Ingrese el precio'
          onChange={handleChange}
          value={formAlta.precio}
        />

        <input
          type="text"
          name='foto'
          placeholder='Ingrese la URL de imagen'
          onChange={handleChange}
          value={formAlta.foto}
        />

        <button type='submit' className='btn boton-enviar mx-3'>Enviar</button>
        <button type='reset' className='btn boton-reset' onClick={handleReset}> Reset</button>
      </form>

    </>

  )
}

export default FormAlta