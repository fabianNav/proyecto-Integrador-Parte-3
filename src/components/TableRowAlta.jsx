/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'
import Swal from 'sweetalert2'



const TableRowAlta = ({ producto, setProductoAEditar }) => {

  const { eliminarProducto } = useContext(ProductosContext)


  const handleAlertaEliminar = (id) => {

    const alertaEliminarProd = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    alertaEliminarProd.fire({
      title: "¿Seguro que quiere eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(producto.id)

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        return
      }
    });

  }




  return (
    <tr className='tr-tbody-table'>
      <td>{producto.nombre}</td>
      <td>{producto.color}</td>
      <td>{producto.almacenamiento}</td>
      <td>{producto.precio}</td>
      <td><img src={producto.foto} alt={producto.nombre} className='img-alta'/></td>
      <td>
        <button className='btn modificar-alta me-2' onClick={() => setProductoAEditar(producto)} >Modificar</button>
        <button className='btn eliminar-alta' onClick={handleAlertaEliminar}>eliminar</button>
      </td>
    </tr>
  )
}

export default TableRowAlta