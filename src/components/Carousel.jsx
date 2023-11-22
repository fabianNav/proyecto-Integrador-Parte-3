
const Carousel = () => {
  return (
    <section className="d-flex justify-content-center">
      <div id="carouselExampleCaptions" className="carousel slide">
        <header>
          <h2>Recomendados</h2>
        </header>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/F1500EA-WB511-300x300.webp" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Asus VivoBook F1500EA-WB51</h5>
              <p>Notebook adecuada para uso basico con resolucion Full HD</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/omen-1-1-300x300.webp" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Notebook HP OMEN 16-b0005dx 16gb</h5>
              <p>Notebook perfecta para gaming, con una RTX 3070 corre todos los juegos a mas de 60 fps.</p>
            </div>
          </div><div className="carousel-item">
            <img src="img/S3502QA-DS711-300x300.webp" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Notebook Asus Vivobook S 8gb</h5>
              <p>Notebook regular para varios tipos de uso, con resolucion Full HD, Windows 11 y graficos integrados,
                nunca te va a fallar.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Carousel