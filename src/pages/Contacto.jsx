import './Contacto.css'
import Form from '../components/Form'
import PrincipioContacto from '../components/PrincipioContacto'
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
        <PrincipioContacto />
        <Form />
      </section>
    </main>

  )
}

export default Contacto