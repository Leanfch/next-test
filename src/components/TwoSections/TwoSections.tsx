import "./TwoSections.css";

export default function TwoSections() {
    return (
        <section className="md-two-sections">
            <ul>
                <li>
                    <article>
                        <div>
                            <h1>70% OFF para INGRESANTES hasta el 9/11</h1>
                            <p>Inscribite llamando al 11 5032-0076 o contactanos a través del botón de Consulta.</p>
                        </div>
                        <a href="#">Contactanos</a>
                    </article>
                </li>
                <li>
                    <article>
                        <div>
                            <h1>De la Serie a la Película: Cómo se creó Robotia</h1>
                            <p>Masterclass Presencial y Gratuita</p>
                            <p>Fecha: <strong>Miercoles 11 de Septiembre a las 19:30</strong></p>
                        </div>
                        <a href="#">Registrate</a>
                    </article>
                </li>
            </ul>
        </section>
    )
}