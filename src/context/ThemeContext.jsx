/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const temaInicial = 'darkMode'

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(temaInicial)

  const handleTheme = () => {
    (theme === 'darkMode') ? setTheme ('white') : setTheme(temaInicial)
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem('modo', theme)
  }

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme)
    localStorage.setItem('modo', theme)
  }, [theme])

  const modoLS = () => {
    let itemLS = localStorage.getItem('modo')
    if(itemLS === null){
      localStorage.setItem('modo', 'white')
    } else if(localStorage.setItem('modo', 'darkMode') === 'white'){
      setTheme('dark')
      document.body.setAttribute('data-bs-theme', 'white')
    }
  }

  const data = {theme, handleTheme, modoLS}

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export {ThemeProvider}
export default ThemeContext


