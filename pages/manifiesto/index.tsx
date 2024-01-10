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
                    <p className="leading-loose">Sobre mí. De formación Arquitecto, Cocinero,<span className="inline md:hidden"><br /></span> de oficio Artista, Carpintero y Explorador.</p>
                    <p className="leading-relaxed">Busco experiencias fértiles que alimenten mi quehacer diario. </p>
                    <p className="leading-relaxed">Soy un manifestador de propuestas que alegran la vida de las personas.</p>
                    <p className="leading-relaxed">Me enfoco en dar soluciones a problemas contemporáneos  <span className="hidden md:inline"><br /></span>integrando variables indispensables para el crecimiento personal.</p>
                    <p className="leading-loose">Así facilitar propuestas que potencien la calidad de las experiencias.</p>
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
                    <p className="leading-relaxed">Sigo el camino guiado por mi intuición y mi propósito centrado en tomar <span className="hidden md:inline"><br /></span>el máximo aprendizaje de las propuestas que se me presentan.</p>
                    <p className="leading-relaxed">Busco compartir enseñanzas y conocimientos cómo <span className="hidden md:inline"><br /></span>mis maestros lo hacen conmigo, en una búsqueda de colaboración mutua.</p>
                    <p className="leading-relaxed pt-5">Generé un Curriculum basado en el estudio, los viajes,  <span className="hidden md:inline"><br /></span>la experimentación y las experiencias que me brindan herramientas a diario.</p>
                    <p className="leading-loodr pt-10">Santiago Ruiz.</p>
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
