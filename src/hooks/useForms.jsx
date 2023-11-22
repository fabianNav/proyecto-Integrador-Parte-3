import { useState } from "react"

export const useForms = (estadoInicial = {} ) => {
    const [values, setValues] = useState(estadoInicial)

    const handleChangeInput = (e) => {
        const {name, value} = e.target
        setValues({
            ...values, 
            [name]: Number(value)              
        })                         
    }


    return [values, handleChangeInput]
}