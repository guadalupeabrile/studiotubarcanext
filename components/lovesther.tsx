import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'


import url1 from '../public/assets/blog/love-img/love-langosta.png';
import url2 from '../public/assets/blog/love-img/love-eyes.png'
import url3 from '../public/assets/blog/love-img/love-lows.png';





export default function Lovesther() {

    return (
        <>


            <div className="relative h-auto w-screen box-border bg-love-background bg-custom-background pb-10">
                <motion.div
                    className="md:hidden absolute -top-48"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`LOV langosta`}
                        className=''
                        style={{ objectFit: "cover" }}
                        width={200}
                        height={400}
                    />
                </motion.div>
                <motion.div
                    className="hidden md:block absolute -top-96 "
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`LOV Langosta`}
                        className=''
                        style={{ objectFit: "cover" }}
                        width={400}
                    />
                </motion.div>
                <motion.div
                    className="text-center w-screen pt-5 md:pt-10 text-lg md:text-5xl"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <p>#ÚNICA #RECICLADA #ARTESANAL</p>
                </motion.div>
                <motion.div
                    className="w-screen relative flex justify-center pt-10"
                    variants={fadeIn('down', 0.7)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url2}
                        alt={`Ojos Lovesther`}
                        className='w-3/5'
                        style={{ objectFit: "cover" }}

                    />
                </motion.div>
                <motion.div
                    className="text-center md:text-left text-sm md:text-xl bg-yellow-100/50 m-10 mt-16 md:mt-32"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <p>ESTHER es una langosta que sale del OCÉANO al notar que se ocupa de limpiar su casa cada vez más seguido. Encuentra elementos que no pertenecen a ese medio.</p>
                    <p>Al salir del AGUA observa que esos objetos se utilizan normalmente por los humanos. Se comunica con personas que disfrutan en la playa y les comunica un claro mensaje:</p>
                    <p>"SOMOS UNO, LA TIERRA, EL AGUA, EL AIRE, NOSOTROS. LIMPIEMOS Y CUIDEMOS NUESTRA CASA COMO A NOSOTROS.</p>
                    <p>A partir de este intercambio, generamos una marca universal para manifestar un mensaje. Sabemos que así llegará a muchas personas. ESTHER comunica a través del ejemplo, de la CONCIENCIA.</p>
                    <p>Generamos un equipo de trabajo en dónde cada uno entrega lo mejor de sí, porque sabe que forma parte de un todo más grande, en un propósito común. Transmitimos mediante el lenguaje del AMOR.</p>
                    <p>A partir de lo que usamos normalmente, y queda en desuso. Gracias a una selección minuciosa, mediante el diseño y el esfuerzo de los trabajadores locales, confeccionamos ropa durable, de gran calidad, única, reciclada, artesanal.</p>
                </motion.div>
                <motion.div
                    className="relative flex justify-center "
                    variants={fadeIn('down', 0.7)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url3}
                        alt={`Ojos Lovesther`}
                        className='w-2/5 pt-10'
                        style={{ objectFit: "cover" }}

                    />
                </motion.div>
            </div>


        </>


    )

}