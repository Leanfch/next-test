import Link from "next/link";
import "./Header.css";
import "./Header-mobile.css";

export default function Header() {
  return (
    <>
      <header>
        <section>
          <ul>
            <li>
              <a
                href="#side-nav"
                className="button-side-nav"
                title="Menu lateral"
              ></a>
            </li>
            <li>
              <Link href="/" className="logo-main">
                <h1>Da Vinci</h1>
              </Link>
            </li>
            <li className="mobile-contact">
              <a href="/contacto" title="Contacto"></a>
            </li>
          </ul>
          <nav>
            <ul>
              <li className="dropdown">
                <a data-dv="carreras" href="#">
                  Carreras
                </a>
                <ul>
                  <li>
                    <a id="active" href="/multimedial.html">
                      Diseño Multimedial
                    </a>
                  </li>
                  <li>
                    <a href="#">Diseño Gráfico Artístico Digital</a>
                  </li>
                  <li>
                    <a href="#">Programación de Videojuegos</a>
                  </li>
                  <li>
                    <a href="#">Cine de Animación y Posproducción</a>
                  </li>
                  <li>
                    <a href="#">Diseño y Programación Web</a>
                  </li>
                  <li>
                    <a href="#">Analista de Sistemas</a>
                  </li>
                  <li className="highlight">
                    <a href="#">Nuevo: Cine y Nuevos Formatos</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">Cursos</a>
                <ul>
                  <li>
                    <a href="#">Cursos Presenciales</a>
                  </li>
                  <li>
                    <a href="#">Cursos Online</a>
                  </li>
                  <li>
                    <a href="#">Chicos y Adolescentes</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/events.html">Eventos</a>
              </li>
              <li className="news-link">
                <a href="/news.html">Noticias</a>
              </li>
              <li className="dropdown">
                <a href="#" data-dv="escuela">
                  La Escuela
                </a>
                <ul>
                  <li>
                    <a href="/la-escuela/infrastructure.html">Instalaciones</a>
                  </li>
                  <li>
                    <a href="/la-escuela/job-placement.html">
                      Inserción Laboral
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/degrees.html">
                      Títulos y Licenciaturas
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/about-davinci.html">Qué Es Da Vinci</a>
                  </li>
                  <li>
                    <a href="/la-escuela/future-students.html">
                      Futuros Alumnos
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/benefits.html">Beneficios</a>
                  </li>
                  <li>
                    <a href="https://davinci.edu.ar/dvtv">DV.TV</a>
                  </li>
                  <li>
                    <a href="https://dvcarreras.davinci.edu.ar/">Intranet</a>
                  </li>
                  <li>
                    <a href="https://dvcampus.davinci.edu.ar/">
                      Campus a Distancia
                    </a>
                  </li>
                </ul>
              </li>
              <li className="main-contact">
                <a href="/contact_us.html">
                  <span>Enviá tu consulta</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <section id="side-nav">
        <a href="#" className="menu-close">
          <i className="icon-times"></i>
        </a>
        <nav>
          <div>
            <ul>
              <li className="dropdown open">
                <p>
                  <a href="#">Carreras</a>
                  <span>
                    <i className="icon-angle-up"></i>
                  </span>
                </p>
                <ul>
                  <li>
                    <a href="/multimedial.html">Diseño Multimedial</a>
                  </li>
                  <li>
                    <a href="#">Diseño Gráfico</a>
                  </li>
                  <li>
                    <a href="#">Diseño de Videojuegos</a>
                  </li>
                  <li>
                    <a href="#">Cine de Animación</a>
                  </li>
                  <li>
                    <a href="#">Diseño Web</a>
                  </li>
                  <li>
                    <a href="#">Analista de Sistemas</a>
                  </li>
                  <li>
                    <a href="#">Nuevo: Cine y Nuevos Formatos</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown open">
                <p>
                  <a href="#">Cursos</a>
                  <span>
                    <i className="icon-angle-up"></i>
                  </span>
                </p>
                <ul>
                  <li>
                    <a href="#">Cursos Presenciales</a>
                  </li>
                  <li>
                    <a href="#">Cursos Online</a>
                  </li>
                  <li>
                    <a href="#">Chicos y Adolescentes</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/events.html">Eventos</a>
              </li>
              <li>
                <a href="https://davinci.edu.ar/dvtv">DV.TV</a>
              </li>
              <li className="dropdown">
                <p>
                  <a href="#">La Escuela</a>
                  <span>
                    <i className="icon-angle-down"></i>
                  </span>
                </p>
                <ul>
                  <li>
                    <a href="/la-escuela/infrastructure.html">Instalaciones</a>
                  </li>
                  <li>
                    <a href="/la-escuela/job-placement.html">
                      Inserción Laboral
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/degrees.html">
                      Títulos y Licenciaturas
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/about-davinci.html">Qué Es Da Vinci</a>
                  </li>
                  <li>
                    <a href="/la-escuela/future-students.html">
                      Futuros Alumnos
                    </a>
                  </li>
                  <li>
                    <a href="/la-escuela/benefits.html">Intranet</a>
                  </li>
                  <li>
                    <a href="https://dvcampus.davinci.edu.ar/">
                      Campus a Distancia
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}
