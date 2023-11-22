
import { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

const Nosotros = () => {

  useEffect(() => {
    document.title = 'Mercado IT - Nosotros'
  }, [])

  const {theme} = useContext(ThemeContext)

  return (
    <main className={theme}>
      <section className="justify-content-center d-flex nosotros container">
        <div className="card nosotros verde">
          <div className="row g-0 verde">
            <div className="col-md-7 verde">
              <div className="card-body verde">
                <h5 className="card-title verde">¿Quienes Somos?</h5>
                <p className="card-text verde">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  beatae non blanditiis harum! Quo inventore quos, vitae quas sit, dolorem repudiandae
                  iste reiciendis ipsam assumenda ducimus velit nam atque? Dignissimos ducimus id ut
                  doloremque suscipit, illo porro! Nobis quaerat laborum ad quod officia veritatis dolores
                  cumque doloremque itaque amet! Voluptatibus quasi iusto repellat consequuntur,
                  inventore, Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore
                  facilis quidem! Est obcaecati quo cum, neque illo veritatis tempora dolorem aut!
                  Mollitia consequuntur dolorum at. Unde eos nemo perferendis, ipsum corrupti sequi
                  blanditiis voluptate deserunt reiciendis tempora cum porro, Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Autem nostrum molestias, quidem, tenetur pariatur
                  repudiandae quis quisquam amet rerum ratione accusantium nam saepe dolorem excepturi
                  veniam dolore, soluta ea praesentium alias reprehenderit minima perspiciatis!
                  Repudiandae dolorum molestiae deleniti. Fugiat, possimus.</p>
              </div>
            </div>
            <div className="col-md-4 verde">
              <img src="/img/nosotros/jason-goodman-Kt-E_Qq8DW4-unsplash.png" alt="¿Quienes Somos?"
                className="img-fluid rounded-start corto"/>
            </div>
          </div>
        </div>
        <div className="card nosotros">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/img/nosotros/francisco-de-legarreta-c-hHg9MC-G8_Y-unsplash.png" alt="¿Que Hacemos?"
                className="img-fluid rounded-start ancho"/>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">¿Que Hacemos?</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, possimus
                  totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati sapiente
                  tempora molestias consectetur qui necessitatibus laborum aspernatur nihil! Libero,
                  placeat dolores ipsam, temporibus hic nisi non odit error nulla dolor pariatur dolore
                  itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Placeat sed, nam reprehenderit saepe
                  dolores quibusdam cum similique. Excepturi omnis dolorem doloremque error asperiores
                  suscipit vel, consectetur quod veniam, eveniet soluta nostrum deleniti reprehenderit
                  minima esse quam eligendi aut obcaecati? Necessitatibus tempora officia quibusdam
                  doloremque, suscipit id eaque eligendi, nam cupiditate in temporibus vero explicabo vel
                  atque provident unde? Sed, neque voluptas! Nostrum nemo quae maiores fuga provident,
                  saepe illo delectus mollitia! Laboriosam rerum inventore molestias exercitationem ad
                  fuga quibusdam a!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card nosotros verde">
          <div className="row g-0 verde">

            <div className="col-md-7 verde">
              <div className="card-body verde">
                <h5 className="card-title verde">¿Por Que Elegirnos?</h5>
                <p className="card-text verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                  possimus totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati
                  sapiente tempora molestias consectetur qui necessitatibus laborum aspernatur nihil!
                  Libero, placeat dolores ipsam, temporibus hic nisi non odit error nulla dolor pariatur
                  dolore itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sint veniam unde nam autem
                  accusamus blanditiis vero deleniti, nihil explicabo magni earum praesentium illum iusto
                  labore accusantium, reiciendis repellat officia. Deleniti dicta fugiat iusto cum at
                  perferendis sed aut, laboriosam, placeat, autem ullam minima dignissimos dolorem
                  voluptatum ducimus sapiente iste ipsum ratione modi impedit sequi officiis. Quo quasi
                  officia velit, cupiditate maiores temporibus commodi voluptatibus! Ex voluptates
                  molestiae voluptas nemo officiis ipsam ipsa accusantium!</p>
              </div>
            </div>
            <div className="col-md-4 verde">
              <img src="/img/nosotros/sigmund-LyF5jsdcYW0-unsplash.png" alt="¿Por Que Elegirnos?"
                className="img-fluid rounded-start rounded float-end"/>
            </div>
          </div>
        </div>
        <div className="card nosotros">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/img/nosotros/jason-goodman-Oalh2MojUuk-unsplash.png" alt="¿De Donde Venimos?"
                className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">¿De Donde Venimos?</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, possimus
                  totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati sapiente
                  tempora molestias consectetur qui necessitatibus laborum aspernatur nihil! Libero,
                  placeat dolores ipsam, temporibus hic nisi non odit error nulla dolor pariatur dolore
                  itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas Lorem ipsum
                  dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                  eveniet dolor accusamus magni suscipit dolorem iure at placeat ea id! Amet voluptatem,
                  ratione labore eaque saepe reprehenderit non natus doloremque iusto perferendis
                  reiciendis sapiente distinctio, voluptate nisi excepturi, enim a obcaecati ducimus
                  fugit? Perferendis totam ad pariatur natus beatae fugit dolorem laboriosam earum
                  accusantium, repellat explicabo, inventore fugiat quae vero quam. Quod maiores eligendi
                  corporis excepturi laudantium reiciendis, vitae eaque blanditiis nemo consectetur nobis
                  atque, tempora accusamus debitis sed architecto.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card nosotros verde">
          <div className="row g-0 verde">
            <div className="col-md-7 verde">
              <div className="card-body verde">
                <h5 className="card-title verde">¿Donde Estamos?</h5>
                <p className="card-text verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                  possimus totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati
                  sapiente tempora molestias consectetur qui necessitatibus laborum aspernatur nihil!
                  Libero, placeat dolore ipsam, temporibus hic nisi non odit error nulla dolor pariatur
                  dolore itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque velit
                  dignissimos temporibus dolore vero beatae odio. Reprehenderit, quisquam sit, accusamus
                  exercitationem laboriosam e praesentium nulla quidem corporis odio labore corrupti quis
                  fuga fugit quam ducimus? Cum hic ex excepturi maiores quae animi temporibus sequi
                  tempora aperiam rem tenetur recusandae ad fugit architecto aspernatur molestias
                  repudiandae neque voluptas officiis corporis, dicta in enim sed. Vitae voluptates
                  mollitia quia repudiandae ab a sequi perspiciatis ex officiis.</p>
              </div>
            </div>
            <div className="col-md-4 verde achicar">
              <img src="/img/nosotros/clint-patterson-dYEuFB8KQJk-unsplash.png" alt="¿Donde Estamos?"
                className="img-fluid rounded-start verde"/>
            </div>
          </div>
        </div>
        <div className="card nosotros">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/img/nosotros/drew-hays-u3o7il8s1Fc-unsplash.png" alt="¿Que Servicios Ofrecemos?"
                className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">¿Que Servicios Ofrecemos?</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, possimus
                  totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati sapiente
                  tempora molestias consectetur qui necessitatibus laborum aspernatur nihil! Libero,
                  placeat dolores ipsam, temporibus hic nisi non odit error nulla dolor pariatur dolore
                  itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas, Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Odio debitis atque sapiente cumque vel
                  maiores labore at exercitationem praesentium esse repudiandae accusantium saepe
                  quibusdam eius, maxime, molestiae quas, ad quam. Vel aliquam, fuga nihil asperiores at
                  minima culpa iusto perspiciatis libero, nemo quae quia dignissimos sit delectus,
                  temporibus hic voluptatum debitis ipsum! Optio nisi suscipit id nostrum cupiditate.
                  Reprehenderit, necessitatibus modi illum eius fugit magni est accusamus animi
                  dignissimos numquam, odit, ducimus recusandae ratione iure dolor?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card nosotros verde">
          <div className="row g-0 verde">
            <div className="col-md-7 verde">
              <div className="card-body verde">
                <h5 className="card-title verde">Fundadores</h5>
                <p className="card-text verde">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
                  possimus totam saepe fugit odio quae repellendus, facilis magni itaque porro obcaecati
                  sapiente tempora molestias consectetur qui necessitatibus laborum aspernatur nihil!
                  Libero, placeat dolores ipsam, temporibus hic nisi non odit error nulla dolor pariatur
                  dolore itaque atque! Sapiente quibusdam placeat mollitia nobis unde voluptate quas.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente nisi, repellat
                  nulla libero doloremque suscipit aspernatur recusandae esse ipsum molestiae maxime eius?
                  Maiores quidem consectetur voluptatum exercitationem, voluptas vitae nulla eos rem
                  assumenda reiciendis totam voluptate sed odit, facilis amet similique optio nemo
                  recusandae dignissimos, et nobis expedita enim? Nulla necessitatibus laboriosam ullam
                  suscipit quidem deserunt officia repudiandae assumenda a corporis veritatis reiciendis
                  iste amet consectetur culpa, ipsa libero, distinctio in ad? Eligendi, incidunt.</p>
              </div>
            </div>
            <div className="col-md-4 verde achicar">
              <img src="/img/nosotros/cookie-the-pom-SNf-hZz6zOY-unsplash.png" alt="Fundadores"
                className="img-fluid rounded-start verde"/>
            </div>

          </div>
        </div>
        <div className="card nosotros">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/img/nosotros/christina-wocintechchat-com-uSL0rdRY-Uw-unsplash.png" alt="Objetivos"
                className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">¿Cuales Son Nuestros Objetivos?</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, possimus
                  totam saepe fugit odio quae repellendus, facilis magni itaque porro Sapiente quibusdam
                  placeat mollitia nobis unde voluptate quas, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Veritatis, placeat quia. Minus voluptatem molestias est harum quas,
                  aut blanditiis aspernatur repudiandae assumenda incidunt alias, praesentium mollitia
                  deleniti deserunt fugiat doloremque dolores tempora culpa quasi perspiciatis quam totam!
                  Expedita, cupiditate in. Distinctio voluptatum voluptate aliquam ab tenetur illum
                  molestias perferendis minus voluptatibus, perspiciatis totam corporis voluptas
                  temporibus consequatur quis dolore quasi laboriosam pariatur? Soluta unde explicabo
                  cumque totam consequuntur ullam nemo amet, corrupti, culpa asperiores quia doloribus,
                  eius possimus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Nosotros