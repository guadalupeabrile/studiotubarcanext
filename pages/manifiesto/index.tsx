import Layout from "../../components/layout"
import Image from "next/image"

import bgFlor from '../../public/assets/blog/footer/flor-manifiesto.png'
import firma from '../../public/assets/blog/manifiesto/firma-studiotubarca.png'

export default function Manifiesto() {

    return (
        <>

            <div className="bg-manifiesto-flor h-screen w-full flex flex-col items-center justify-center">
                <div className="p-20 text-center text-3xl">
                    <p className="leading-loose">Arquitect degree, artist, carpenter, cooker and explorer by trade.</p>
                    <p className="leading-loose ">I seek fertile experiences that nourish my daily endeavors. I am a manifestor of ideas that bring hoy to people's lives. I focus on providing solutions to contemporary problems by integrating essential variables for personal growth.</p>
                    <p className="leading-loose">In this way, I facilitate proposals that enchance the quality of experieces</p>
                </div>
                <div>
                    <Image
                        src={firma}
                        alt={"Firma studiotubarca"}
                        width={250}
                        height={250} />

                </div>
            </div>


            <div className="bg-manifiesto-flor h-screen w-full">
                Hola
            </div>



        </>
    )
}
