/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import Swal from 'sweetalert2'
import { createContext, useEffect, useState } from "react";
import { get } from "../utils/http";
export { createContext } from "react";




// creamos el contexto
const ProductosContext = createContext()


// armamos el provider
const url = 'https://655b87b7ab37729791a945e0.mockapi.io/productos/'

const ProductosProvider = ({ children }) => {
    //ESTADO:
    const [productos, setProductos] = useState(null)




    //para que se ejecute una vez:
    useEffect(() => {
        obtenerProductosBack()
    }, [])


    //! GET - OBTENER LOS PRODUCTOS EN EL ALTA
    const obtenerProductosBack = async () => {

        try {
            const productosBack = await get(url)
            setProductos(productosBack)  //seteo con los prod que me llegan del backend.

        } catch (error) {
            console.log(`[obtenerProductosBack] -> Algo no funciono -> ${error}`)
        }
    }


    //! POST - AGREGAR PRODUCTO NUEVO Y AL DB.JSON
    const agregarProducto = async (nuevoProducto) => {
        try {

            const fetchConfig = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(nuevoProducto)          // porque el backend siempre va a esperar un string
            }



            const respuesta = await fetch(url, fetchConfig)

            if (!respuesta.ok) {
                throw new Error(`Algo paso: ${respuesta.status} ${respuesta.statusText}`)
            }

            const productoCreado = await respuesta.json()
            //console.log(productoCreado)

            const nuevaProductoDB = [...productos, productoCreado]
            setProductos(nuevaProductoDB)


        } catch (error) {
            console.log(`[agregarProducto]: no se pudo agregar el nuevo producto ->`, error)
        }
    }


    //! METODO PUT - para modificar o actualizar productos:

    const modificarProducto = async (productoEditado) => {

        const urlCompleta = url + productoEditado.id
        try {
            const fetchConfig = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoEditado)
            }

            const respuest = await fetch(urlCompleta, fetchConfig)
            if (!respuest.ok) {
                throw new Error(`[Algo paso con PUT] Error... ${respuest.status}`)
            }

            const datos = await respuest.json()

            const nuevaProductoDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevaProductoDB)


        } catch (error) {
            console.error(`Error PUT`, error)
        }
    }




    //! METODO DELETE - Eliminar producto

    const eliminarProducto = async (id) => {

        try {
            const urlCompleta = url + id
            console.log(urlCompleta)


            const fetchConfig = {
                method: 'DELETE',
            }

            const respuesta = await fetch(urlCompleta, fetchConfig)
            if (!respuesta.ok) {
                throw new Error(`[eliminarUsuario] Error... ${respuesta.status}`)
            }

            const data = await respuesta.json()

            // actualizo la base de datos:
            const nuevaProductoDB = productos.filter(producto => producto.id !== id)
            setProductos(nuevaProductoDB)

        } catch (error) {
            console.log('Algo paso con el [eliminarProducto]')
        }



    }





    const data = { productos, agregarProducto, modificarProducto, eliminarProducto }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


//exportamos

export { ProductosProvider }

export default ProductosContext
