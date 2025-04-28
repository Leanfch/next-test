import "./PrideComponent.css";
import Image from "next/image";

export default function PrideComponent() {
    return (
        <section className="md-pride">
            <h1>Orgullo Da Vinci</h1>
            <p>En esta sección te presentamos a algunos egresados de <strong>Diseño Multimedial </strong>que están
                dejando su marca en el mundo.</p>

            <div>
                Slider Orgullo
            </div>

            <h2>Empresas que confían en nosotros</h2>
            <p>Cada año Escuela Da Vinci recibe más de <strong>1500 </strong><strong>ofertas laborales</strong> de
                empresas de primer nivel para nuestros estudiantes. Algunas de las empresas y organizaciones que nos
                contactaron incluyen al Gobierno de la Ciudad de Buenos Aires, TyC Sports, Grupo Clarín, La Nación,
                Aycron IT Solutions, I-SEC Information Security Inc., A.I.E.R.A., AXG Tecnonexo, EMERETAIL, Looppa SA.,
                Interoptics S.A., IT CONVERGENCE (Oracle Partners), Axxon Solutions, Soft Agrega S.A., y otras.</p>
            <ul className="md-logos">
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/diseno-multimedial/companies/logo_axxon-solution.svg"
                        alt="Logo de axxon" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/diseno-multimedial/companies/logo_aycron.svg"
                        alt="Logo de aycron" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/diseno-multimedial/companies/logo_el-club-de-la-milanesa.svg"
                        alt="Logo de el club de la milanesa" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_el-planetario.svg"
                        alt="Logo de el plantario" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_gigabyte.svg"
                        alt="Logo de gigabyte" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_globant.svg"
                        alt="Logo de globant" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_grupo-clarin.svg"
                        alt="Logo de grupo clarín" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_la-nacion.svg"
                        alt="Logo de la nacion" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy"
                        src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_mercadolibre.svg"
                        alt="Logo de mercado libre" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_nvidia.svg"
                        alt="Logo de nvidia" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://davinci.edu.ar/uploads/images/carreras/diseno-multimedial/logos-empresas/logo_tyc-sports.svg"
                        alt="Logo de tyc sports" width={253.33} height={187.34} />
                </li>
                <li>
                    <Image loading="lazy" src="https://images.cdn.thinkion.com.ar/dv/inicio/companies/logo_vorterix.svg"
                        alt="Logo de vorterix" width={253.33} height={187.34} />
                </li>
            </ul>

            <p>Mirá el listado completo de empresas que confian en nosotros para sus ofertas laborales</p>

            <a href="#" className="pink-button">Ver Listado Completo</a>
        </section>
    )
}