/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { post } from "../utils/http";

//! Creando contexto
const CarritoContext = createContext()

//! Armando el provider
const url = 'https://655b87b7ab37729791a945e0.mockapi.io/carrito'

const CarritoProvider = ({ children }) => {
    //ESTADO de useLocalStorage:
    const [agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, guardarCarrito, carrito] = useLocalStorage('carrito', [])




    function elProductoAunNoExisteEnCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length            // 0 -> si no hay.  1-> si hay
    }


    function elProductoYaExisteEnCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }



    const agregarCarritoContext = (producto) => {

        if (!elProductoAunNoExisteEnCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = elProductoYaExisteEnCarrito(producto)
            productoDeCarrito.cantidad++

            guardarCarrito(carrito)
        }

    }



    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {

            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.error('[cambiarCantidadCarritoContext]: No se guardó el producto')
        }
    }



    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }



    const guardarCarritoContext = async () => {             // peticion asincronica para que gaurde el carrito (backend)

        try {
            const carritoGuardado = await post(url, carrito)

        } catch (error) {
            console.error('[guardarCarritoContext]: No se guardó el carrito', error)
        }

    }




    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }



    const cantidadTotalArticulosCarritoContext = () => {
        let sumaTotalArticulos = carrito.reduce((total, producto) => {    //reduce -> recorre el array
            return total + producto.cantidad
        }, 0)
        return sumaTotalArticulos
    }



    const precioTotalArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)
        return sumaTotal
    }




    const precioTotalSinIvaCarritoContext = () => {

        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)

        let IVA = Number(sumaTotal * 0.18)
        let subTotal = Number(sumaTotal - IVA)
        return subTotal
    }



    const valorDelIVACarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)

        let IVA = Number(sumaTotal * 0.18)
        let subTotal = Number(sumaTotal - IVA)
        return IVA
    }



    const data = {
        carrito,
        agregarCarritoContext,
        eliminarProductoCarritoContext,
        guardarCarritoContext,
        vaciarCarritoContext,
        cantidadTotalArticulosCarritoContext,
        precioTotalArticulosCarritoContext,
        cambiarCantidadCarritoContext,
        precioTotalSinIvaCarritoContext,
        valorDelIVACarritoContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}



export { CarritoProvider }

export default CarritoContext