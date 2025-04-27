import "./CoursesWorks.css";
import Image from "next/image";

export default function CoursesWorks() {
    return ( 
        <section className="md-courses-works">
        <section>
            <figure>
                <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/diseno-multimedial/talleres-especiales.webp" alt="Alumnos estudiando" width={560} height={440}/>
            </figure>
            <article>
                <h1>Talleres Especiales</h1>
                <p>Los talleres especiales son <strong>gratuitos </strong>para alumnos de carreras. Se trata de
                    pequeños cursos paralelos a la cursada, que te permiten estudiar y combinar conocimientos en
                    <strong>campos experimentales</strong>, complementar lo estudiado en clase, y actualizarte con
                    <strong>herramientas de última generación</strong>.<br />
                    &nbsp;</p>
                <p>Cada semestre podés elegir los que más te interesen de entre la oferta específica de ese período.
                    A manera de ejemplo, algunos de los últimos talleres ofrecidos son: <strong>efectos especiales
                    </strong>y<strong> maquillaje de caracterización,</strong> iluminación y cámara con
                    <strong>Chroma Key, </strong>desarrollo mobile con<strong> Flex, pre-imprenta </strong>y<strong>
                        maquetación, tipografía, programación </strong>para redes sociales<strong>, fotografía,
                        Motion Capture</strong> (captura de movimiento), técnicas de<strong> encuadernación,
                    </strong>construcción del<strong> guión </strong>de ficción<strong>, Real Flow,</strong> armado
                    de<strong> demo-reel</strong>, y animación en <strong>Stop-Motion.</strong></p>
            </article>
        </section>
        <section>
            <figure>
                <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/diseno-multimedial/campo-laboral.webp" alt="Alumnos estudiando" width="560" height="440"/>
            </figure>
            <article>
                <h1>Campo Laboral</h1>
                <p>Estudiar la carrera de <strong>Diseño Multimedial </strong>en Escuela Da Vinci te convierte en un
                    profesional capaz de <strong>trabajar </strong>y <strong>liderar equipos</strong> en importantes
                    agencias de publicidad transmedia, estudios de diseño gráfico, canales de televisión y
                    streaming, posproducción de películas, desarrolladoras de apps, videojuegos, webs, y productos
                    interactivos, departamentos de comunicación de empresas, editoriales, empresas de tecnología y
                    espectáculos, organismos gubernamentales y ONGs. Teniendo en cuenta que las <strong>compañías
                    </strong>buscan profesionales con una formación orgánica y que muchos de nuestros egresados
                    trabajan de <strong>manera independiente</strong>, creando sus propias empresas y agencias
                    digitales, Escuela Da Vinci ofrece un programa pensado para que puedas desarrollar tu
                    <strong>estilo personal </strong>y concretar tus <strong>propios proyectos.</strong></p>
            </article>
        </section>
    </section>

    )
}