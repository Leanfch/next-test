import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-small">
        <ul className="footer-ul">
          <li>
            <Image
              loading="lazy"
              src="https://davinci.edu.ar/images/logo-davinci-blanco.svg"
              alt="Logo Da Vinci"
              width="172"
              height="46"
            />
          </li>
          <li>
            <p>
              Copyright 2025 - <strong>Da Vinci Primera Escuela de Arte Multimedial</strong>
            </p>
            <p>Todos los derechos reservados.</p>
          </li>
          <li>
            <ul>
              <li>
                <a href="#">
                  <i className="facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="linkedin"></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
  );
}
