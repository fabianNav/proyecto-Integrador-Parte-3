

const Form = () => {
  return (


    <form className="container contacto" id="form">
      <h4>Contáctenos hoy y obtenga una respuesta en 24 horas</h4>
      <div>
        <input type="text" className="form-control" placeholder="Nombre" id="name"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Apellido" id="lastName"/>
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Email"/>
      </div>
      <div className="mb-3">
        <input type="tel" className="form-control" placeholder="Telefono" id="phone"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Ciudad" id="city"/>
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Pais" id="pais"/>
      </div>
      <div className="mb-3">
        <input type="number" className="form-control" placeholder="Codigo Postal" id="postal"/>
      </div>
      <div>
        <textarea name="Consultas" className="form-control">Comentarios</textarea>
      </div>

      <button type="submit" className="btn mb-3 ms-auto" id="enviarFormu">Enviar</button>

    </form>


  )
}

export default Form