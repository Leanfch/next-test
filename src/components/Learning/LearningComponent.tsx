import "./LearningComponent.css";

export default function LearningComponent() {
    return (
        <section className="md-learning">
        <div className="svg bubble-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 630">
                <defs>
                    <linearGradient id="svg_gradient_2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgb(240, 50, 113)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "rgb(128,0,128)", stopOpacity: 1 }} />
            </linearGradient>
                </defs>
                <path fill="url(#svg_gradient_1)">
                    <animate dur="10s" repeatCount="indefinite" attributeName="d"
                        values="M.2 145.2C2.5 82.6 47.1 45.8 106.9 27.1 297-32.5 537.2 17.3 626.6 70.5c57.3 34.1 78.3 97.9 49.3 158.2-39.2 81.8-265.6 306.2-350 375.7-52.4 43.2-119.7 25.5-165.6-24.2C85.4 499.2-5 284.1.2 145.2z; M2.4 172.6C4.7 110 25.7 5.3 86.9 19c251.5 56.1 393.2-57.6 482.5-4.4 57.3 34.1 90 122 12 234.5-94.8 136.8 33.4 281.5-51 351-52.4 43.2-372-31.5-450-90-88.3-66.2-83.1-198.6-78-337.5z; M.2 145.2C2.5 82.6 47.1 45.8 106.9 27.1 297-32.5 537.2 17.3 626.6 70.5c57.3 34.1 78.3 97.9 49.3 158.2-39.2 81.8-265.6 306.2-350 375.7-52.4 43.2-119.7 25.5-165.6-24.2C85.4 499.2-5 284.1.2 145.2z"
                        fill="freeze" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"></animate>
                </path>
            </svg>
        </div>
        <div className="svg bubble-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 630">
                <defs>
                <linearGradient id="svg_gradient_1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(240, 50, 113)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "rgb(128,0,128)", stopOpacity: 1 }} />
        </linearGradient>
                </defs>
                <path fill="url(#svg_gradient_1)">
                    <animate dur="12s" repeatCount="indefinite" attributeName="d"
                        values="M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z; M96.4 111.8c18-68 32.9-90.7 79.3-106.7C216-8.8 317.2 8.6 355.1 21.8c114.7 40 93.6 64.9 150 71.3 72.5 8.3 76.7-81.3 147.3-6 58 61.9-63.5 96.5-76 176.7-5.4 34.6 50.7 64.7 79.3 103.3 17.9 24.1 14.3 177.8-12.6 191.8-83.4 43.5-70.7-9.8-128.1 24.8-136.6 82.6-191.3 17.3-266.7-12-54.4-21.2-18-67.3-119.3-100.7C75.6 453.5 33.3 366.9 3.1 313c-16-28.5 34.6-98.6 42-107.2 29.5-34.4 39.7-49.9 51.3-94z; M150.3 142.5c48-6.2 95 5.3 141.5-10.7C332 117.9 364.3 91 393 62.9 429 27.7 475-5.6 531.4.8c72.5 8.3 123.5 68.8 147.4 126.6 32.5 78.4-6.7 161-19.3 241.2-5.4 34.6 5 71.2 10.6 105.3 4.8 29.6 7.1 60.6-3.7 88.9-19.3 50.9-79.2 67.9-133.9 67.9-159.6 0-190-134.4-286.5-217.8-44.1-38.2-99.9-37.4-153.1-61-51.5-22.9-109-63.6-88.7-122 3.7-10.7 9.5-20.3 16.9-28.9 29.5-34.4 83.9-52.6 129.2-58.5z"
                        fill="freeze" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"></animate>
                </path>
            </svg>
        </div>
        <section>
            <h1>Qué Aprendés</h1>
            <ul>
                <li>
                    <article>
                        <div><i className="icon-pencil-paintbrush"></i></div>
                        <h2>Diseño Gráfico e Ilustración Digital</h2>
                        <p>Explotá al máximo tus capacidades creativas con el uso de <strong>tabletas
                                Wacom</strong>, y aprendé lenguaje visual con software especializado como
                            <strong>Adobe Photoshop</strong> e <strong>Illustrator</strong>, para la realización de
                            composiciones digitales, fotomontajes y retoques fotográficos profesionales.
                        </p>
                    </article>
                </li>
                <li>
                    <article>
                        <div><i className="icon-network-wired"></i></div>
                        <h2>Desarrollo de Páginas Web y Apps</h2>
                        <p>Aprendé a programar <strong>sitos web</strong> y <strong>aplicaciones </strong>para
                            celulares, con herramientas como <strong>HTML5, CSS3, Javascript, PHP, Wordpress, y
                                Jquery Mobile</strong>, para trabajar, emprender y desarrollarte en el mundo digital
                            actual.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <div><i className="icon-cube"></i></div>
                        <h2>Efectos Visuales (VFX) y Modelado y Animación 3D</h2>
                        <p>Aprendé <strong>modelado</strong> y<strong> animación 3D</strong>, texturizado y
                            renderizado en <strong>3Ds Max </strong>y <strong>Cinema 4D</strong> con los
                            motores<strong>&nbsp;Keyshot</strong>, <strong>V-Ray y Unity</strong>. Realizá
                            <strong>Motion Graphics </strong>combinando<strong> After Effects </strong>y
                            <strong>animación 3D</strong> avanzada para televisión, publicidad, web y cine. Descubrí
                            cómo realizar <strong>Video Mapping</strong> sobre superficies reales, como fachadas de
                            edificios, utilizando técnicas innovadoras.
                        </p>
                    </article>
                </li>
                <li>
                    <article>
                        <div><i className="icon-running"></i></div>
                        <h2>Animación con Motion Capture</h2>
                        <p>Escuela Da Vinci cuenta con uno de los pocos y<strong> más completos equipos de
                                MOCAP</strong> (Motion Capture o Captura de Movimiento) para que aprendas en una
                            situación real de captura de movimiento para <strong>videojuegos, animación y
                                cine</strong>, entre otras áreas.</p>
                    </article>
                </li>
                <li>
                    <article>
                        <div><i className="icon-vr-cardboard"></i></div>
                        <h2>Realidad Aumentada y Realidad Virtual 360</h2>
                        <p>Realizá una experiencia interactiva con <strong>HTC VIVE (lentes de RV)</strong>, en un
                            entorno virtual con apariencia real. Aprendé a crear aplicaciones en <strong>realidad
                                virtual </strong>y realidad <strong>aumentada </strong>usando
                            <strong>Unity</strong>, a implementar <strong>campañas 360 </strong>y desarrollos
                            orientados al <strong>entretenimiento</strong>, <strong>publicidad</strong> y
                            <strong>educación</strong> haciendo una experiencia totalmente
                            <strong>inmersiva</strong>.
                        </p>
                    </article>
                </li>
                <li>
                    <article>
                        <div><i className="icon-map-signs"></i></div>
                        <h2>Marketing Digital y Social Media</h2>
                        <p>Desarrollá <strong>campañas digitales</strong> para Google Ads, Instagram, Facebook,
                            Twitter, Linkedin y Youtube, y aprendé a implementar un <strong>plan estratégico
                                publicitario</strong> de manera integral, <strong>SEO </strong>y cómo tener
                            presencia en <strong>redes </strong>y <strong>medios</strong>. Colaborá con reconocidos
                            directores de arte, especializados en producciones digitales <strong>multiplataforma,
                            </strong>en nuestras <strong>prácticas profesionales.</strong></p>
                    </article>
                </li>
            </ul>
            <aside>
                <h1>Lenguajes y Software</h1>
                <p>Adobe Premiere, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, 3D Studio Max, Substance
                    Painter, Audition, Phoenix FD, HTML5 y CS3, Javascript, PHP, Wordpress, Fume Effects, VRay,
                    Construct, Cinema 4D, Unity,&nbsp;Unreal Engine, Blender y Marmoset Toolbag.</p>
            </aside>
        </section>
    </section>
    )
}