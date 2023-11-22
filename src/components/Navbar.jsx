/* eslint-disable react-hooks/exhaustive-deps */
import Swal from 'sweetalert2'
import { useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import CargaCarritoInicio from './CargaCarritoInicio'
import CarritoContext from '../context/CarritoContext'
import ThemeContext from '../context/ThemeContext'

const Navbar = () => {
  const { carrito, vaciarCarritoContext } = useContext(CarritoContext)
  const { theme, handleTheme, modoLS } = useContext(ThemeContext)

  useEffect(() => {
    modoLS()
  }, [])

  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }

  const navigate = useNavigate()

  const handleProcesarCompra = () => {
    if (carrito.length === 0) {
      // console.log('esta vacio')

      Swal.fire({
        title: "OH NO!!!",
        text: "NO HAY ELEMENTOS EN EL CARRITO",
        icon: "error",
        background: '#000',
        color: '#0cc',
        width: '30%'
      });
    } else {
      navigate('/carrito')
    }
  }



  return (
    <>
      <header className={`${theme} header-nav`}>
        <nav className="navbar justify-content-center container ps-5">
          <div className="container d-flex mt-0 align-items-center">
            <ul id="navElements">
              <Link className="navbar-brand" to="/">
                <img src="/img/The world studios.png" alt="Logo" width="100" height="100" />
              </Link>
              <div className={`dropdown ${theme}`}>
                <a className={`btn dropdown-toggle ${theme}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>

                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/todo">Todo</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/notebooks">Notebooks</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/software">Software</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/conectividad">Conectividad</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/pages/accesorios">Accesorios</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/perifericos">Perifericos</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/consolas">Consolas</NavLink></li>

                </ul>
              </div>
              <NavLink className="nav-link ms-5 link" to="/contacto">Contacto</NavLink>
              <NavLink className="nav-link ms-5 link" to="/nosotros">Nosotros</NavLink>
              <NavLink className="nav-link ms-5 link" to="/alta">Alta</NavLink>
              
            </ul>

            <div className={`dropdown carrito ${theme}`}>
              <a type="button" className="nav-link ms-5  carrito" data-bs-toggle="dropdown" aria-expanded="false"><i
                className="fa-sharp fa-solid fa-cart-shopping"></i>
              </a>
              <ul className="dropdown-menu" id="carrito">
                <table id="lista-carrito" className={`tablaCarrito ${theme}`}>
                  <thead className={`${theme}`}>
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className={`${theme}`}>

                    {
                      carrito && carrito.map(item => (
                        <CargaCarritoInicio key={item.id} item={item} />
                      ))
                    }
                  </tbody>
                </table>
                <div className="d-grid gap-2 d-md-block justify-content-md-center">
                  <button id="vaciar-carrito" className="btn btn-primary" onClick={handleVaciarCarrito}>Vaciar Carrito</button>
                  <button id="procesar-pedido" className="btn btn-danger" onClick={handleProcesarCompra}>Procesar Compra</button>
                </div>
              </ul>
            </div>
          </div>
          <button className="darkModeSwitch ms-2" id="switch" onClick={handleTheme}>
            {theme === 'dark' ? <span><i className="fa-regular fa-moon"></i></span> : <span><i className="fa-regular fa-sun"></i></span>}
          </button>
        </nav>
      </header>
    </>)
}

export default Navbar