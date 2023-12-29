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
                <div className="p-5 md:p-20 text-center font-light md:text-3xl">
                    <p className="leading-loose">Arquitect degree, artist, carpenter, cooker and explorer by trade.</p>
                    <p className="leading-loose ">I seek fertile experiences that nourish my daily endeavors. I am a manifestor of ideas that <span className="hidden md:inline"><br /></span> bring hoy to people's lives. I focus on providing solutions to contemporary problems <span className="hidden md:inline"><br /></span> by integrating essential variables for personal growth.</p>
                    <p className="leading-loose">In this way, I facilitate proposals that enchance the quality of experieces</p>
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
                <div className="bg-manifiesto-perro p-5 md:p-36 text-center font-light md:text-3xl">
                    <p className="leading-loose">I follow the path guided by my intuition and my purpose, centered on emboding insights from the opportunities that come my way. I aim to share teachings and knowledge as my mentors do with me, in a quest for mutual collaboration. I have crafted a curriculum based on study, travels, experimentation, and experiences that provide me with the tools on a daily basis. </p>
                    <p className="leading-loose">Santiago Ruiz.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-5 md:space-x-5">
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
