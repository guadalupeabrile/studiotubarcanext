import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'
import { Navigation, EffectFade } from 'swiper/modules'

import url1 from '../public/assets/blog/mesatelite-img/mesat-name.png';
import url2 from '../public/assets/blog/mesatelite-img/mesat-dibujos.png'
import url3 from '../public/assets/blog/mesatelite-img/mesat-1.jpg'
import url4 from '../public/assets/blog/mesatelite-img/mesat-diag.png'
import url5 from '../public/assets/blog/mesatelite-img/mesat-2.jpg'
import url6 from '../public/assets/blog/mesatelite-img/mesat-3.jpg'
import url7 from '../public/assets/blog/mesatelite-img/mesat-4.jpg'
import url8 from '../public/assets/blog/mesatelite-img/mesat-5.png'
import url9 from '../public/assets/blog/mesatelite-img/mesat-6.jpg'
import flor from '../public/assets/blog/footer/flor-manifiesto.png';




export default function Mesat() {

    return (
        <>


            <div className="flex w-screen box-border bg-custom-background grid grid-cols-2 md:grid-cols-3 ">
                <motion.div
                    className="md:h-screen relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url2}
                        alt={`Diagramas Mesatelites`}
                        className=''
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className="w-full relative md:col-span-2"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`Mesatelite Name`}
                        className='px-3 pt-3 md:p-10'
                        style={{ objectFit: "cover" }}
                    />
                    <div className='flex flex-col text-center items-center justify-center pt-5 px-2 text-xs md:text-2xl md:text-left md:items-end md:px-10'>
                        <p>Es la mesa el mueble más utilizado y más común.</p>
                        <p>La expresión de un artista, la de un cocinero,</p>
                        <p>o un corriente surge desde la mesa.</p>
                        <p>Es el soporte, el lienzo dónde se escribe el mensaje.</p>
                        <p>Es el punto de encuentro de "la famiglia",</p>
                        <p>el lugar del negocio,</p>
                        <p>dónde se comparte la idea más bárbara.</p>
                    </div>
                </motion.div>
            </div>

            <div className="flex w-screen box-border bg-custom-background grid grid-cols-3 ">
                <motion.div
                    className="relative col-span-2 pl-5 md:pl-32"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url3}
                        alt={`Foto atardecer`}
                        className='h-full '
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className="relative"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url4}
                        alt={`Diagramas Mesatelite`}
                        className=''
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>
            <div className="flex w-screen box-border bg-custom-background grid grid-cols-5">
                <motion.div
                    className="relative col-span-3"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url5}
                        alt={`Foto atardecer 2`}
                        className='h-full'
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className="relative col-span-2"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='w-full absolute top-0 left-0 flex flex-col text-center items-center justify-center  text-xs md:text-xl md:text-left md:items-end md:pr-10'>
                        <p>Un proyecto que surge</p>
                        <p>de las mesas compartidas</p>
                        <p>con el amigo Marcelo Barchi.</p>
                        <p className='hidden md:inline'>Fuente inagotable</p>
                        <p className='hidden md:inline'>de inspiración.</p>

                    </div>
                    <Image
                        src={url6}
                        alt={`Dibujo Hombre cenando Mesatelite`}
                        className='h-full'
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>

            <div className="flex w-screen box-border bg-custom-background grid grid-cols-5 pl-5 md:pl-32">
                <a href='/assets/blog/pdf/ficha-tecnica-cava.pdf' download>
                    <motion.div
                        className='p-3 '
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={flor}
                            alt={`Flor manifiesto`}
                            style={{ objectFit: "cover" }}
                            width={200}
                            height={200}
                        />
                    </motion.div>
                </a>

                <motion.div
                    className="relative col-span-4"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url7}
                        alt={`Foto mesatelite mar`}
                        className='h-full'
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div >
            <div className="flex w-screen box-border bg-custom-background grid grid-cols-2">
                <motion.div
                    className="relative"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url9}
                        alt={`Atardecer`}
                        className='h-full'
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className="relative"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='flex flex-col text-center items-center justify-center p-5 md:pb-32  text-xs md:text-2xl md:text-left md:items-end md:px-10'>
                        <p>Puede la mesa ser un soporte orgánico,</p>
                        <p>dónde la apropiación sea sugestiva</p>
                        <p>Mesatélite resignifica,</p>
                        <p>propone una libre apropiación espacial</p>
                        <p>del soporte conocido.</p>
                        <p>Se trata de complementos perfectos,</p>
                        <p>cómo las ideas y el papel,</p>
                        <p>nosotros y la mesa.</p>
                    </div>
                    <Image
                        src={url8}
                        alt={`Dibujo`}
                        className='w-full'
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>
        </>


    )

}