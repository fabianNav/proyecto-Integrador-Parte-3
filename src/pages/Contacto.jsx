import './Contacto.css'
import Form from '../components/Form'
import { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

const Contacto = () => {

  useEffect(() => {
    document.title = 'Mercado IT - Contacto'
  }, [])

  const {theme} = useContext(ThemeContext)

  return (
    <main className={theme}>
      <section className="container contacto formu">
        <Form />
      </section>
    </main>

  )
}

export default Contacto