import Layout from "../../components/layout"
import Image from "next/image"
import Link from "next/link"
import firma from '../../public/assets/blog/manifiesto/firma-studiotubarca.png'
import studio from '../../public/assets/blog/manifiesto/studiotubarca.png'
import artedi from '../../public/assets/blog/manifiesto/arte-di-costruire.png'
import fuego from '../../public/assets/blog/igiardini-img/igiardini-09-min.webp'

export default function Manifiesto() {

    return (
        <>

            <div className="relative bg-manifiesto-flor h-screen w-screen flex flex-col items-center justify-center">
                <div className="p-5 md:p-20 text-center font-light text-xs md:text-3xl">
                    <p className="leading-loose">De formación Arquitecto, Cocinero, de oficio Artista, Carpintero y Explorador.</p>
                    <p className="leading-loose ">Busco experiencias fértiles que alimenten mi quehacer diario. Soy un manifestador de <span className="hidden md:inline"><br /></span>propuestas que alegran la vida de las personas. Me enfoco en dar soluciones a problemas <span className="hidden md:inline"><br /></span>contemporáneos integrando variables indispensables para el crecimiento personal.</p>
                    <p className="leading-loose">Asi facilitar propuestas que potencien la calidad de las experiencias</p>
                </div>
                <div>
                    <Link as={`/`} href={`/`} aria-label='studiotubarca home'>
                        <Image
                            src={firma}
                            alt={"Firma studiotubarca"}
                            className="hover:shadow-lg"
                            width={150}
                            height={150} />
                    </Link>
                </div>
            </div>


            <div className="relative bg-custom-background h-screen w-screen border-box">
                <Image
                    src={fuego}
                    alt={"Firma studiotubarca"}
                    className="md:p-20 "
                    fill
                    objectFit="cover" />
            </div>

            <div className="relative bg-custom-background h-screen w-screen flex flex-col items-center justify-center">
                <div className="bg-manifiesto-perro p-5 md:p-32 text-center font-light text-xs md:text-3xl">
                    <p className="leading-loose">Sigo el camino guiado por mi intuición y mi propósito centrado en tomar el máximo aprendizaje <span className="hidden md:inline"><br /></span>de las propueestas que se me presentan. Busco compartir enseñanzas y conocimientos cómo <span className="hidden md:inline"><br /></span>mis maestros lo hacen conmigo, en una búsqueda de colaboración mutua.</p>
                    <p className="leading-loose">Generê un Curriculum basado en el estudio, los viajes, la experimentación y las experiencias <span className="hidden md:inline"><br /></span>que me brindan herramientas a diario.</p>
                    <p className="leading-loose pt-5">Santiago Ruiz.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-5 pb-5">
                    <Link as={`/`} href={`/`} aria-label='studiotubarca home'>
                        <Image
                            src={studio}
                            className="hover:shadow-lg"
                            alt={"Logo studiotubarca"}
                            width={450}
                            height={150} />
                    </Link>
                    <Link as={`/`} href={`/`} aria-label='studiotubarca home'>
                        <Image
                            src={artedi}
                            alt={"Arte di Construire"}
                            className="hover:shadow-lg"
                            width={150}
                            height={150} />
                    </Link>
                </div>
            </div>




        </>
    )
}
