import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'

import url1 from '../public/assets/blog/casabarbol-img/nido.png';
import url2 from '../public/assets/blog/casabarbol-img/croquis.png';
import url3 from '../public/assets/blog/casabarbol-img/algodon.png';
import url4 from '../public/assets/blog/casabarbol-img/casabarbol-graph.png';
import url5 from '../public/assets/blog/casabarbol-img/casabarbol-esquema.png';
import url6 from '../public/assets/blog/casabarbol-img/casabarbol-gif.gif';
import url7 from '../public/assets/blog/cava-img/cava-grid-6.webp';
import flor from '../public/assets/blog/footer/flor-manifiesto.png';




export default function Casabarbol() {

    return (
        <>


            <div className="font-mono bg-custom-background flex w-screen items-center justify-content place-content-evenly grid grid-cols-1 md:grid-cols-3 md:space-x-5 md:space-y-0 space-y-20 px-32 md:p-10">

                <motion.div
                    className="flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`Nido`}
                        width={250}
                        height={250}

                    />
                    <p className='pt-5 text-center'>Nido de Hornero</p>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url2}
                        alt={`Croquis`}
                        width={250}
                        height={250}

                    />
                    <p className='pt-5 text-center'>Croquis idea madre</p>
                </motion.div>
                <motion.div
                    className="flex items-center justify-center flex-col pb-10 md:pb-0"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url3}
                        alt={`algodon`}
                        width={250}
                        height={250}

                    />
                    <p className='pt-5 text-center'>Campo de algodón</p>
                </motion.div>
            </div>

            <div className="relative w-screen grid grid-cols-1 0 md:pl-0 md:py-10 bg-custom-background">
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url4}
                        alt={`Casabarbol Croquis`}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>

            <div className="relative w-screen grid grid-cols-1 px-5 md:px-10 py-10 bg-custom-background">
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url5}
                        alt={`Casabarbol Esquema`}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>

            <div className="font-mono flex w-screen h-auto grid grid-cols-1 md:grid-cols-3  md:pr-10 bg-custom-background">
                <motion.div
                    className="md:col-span-2 md:row-span-1 relative flex items-center"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url6}
                        alt={`Casabarbol Gif`}
                        className='pl-5'
                        width={1200}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className='relative flex md:col-span-1 items-start justify-end pr-10 md:pr-0 '
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='text-sm pt-20 md:pt-0 text-right md:text-lg text-gray-800'>

                        <p className=''>Proyectar como un niño, para <span><br /></span> un niño.</p>
                        <p className=' pt-5'>La analogía entre <span><br /></span>sentirse protegido en el <span><br /></span>momento previo al <span><br /></span>nacimiento, en el vientre <span><br /></span>materno.</p>
                        <p className=''>Luego, como si de una <span><br /></span>ventana se tratase, la luz se <span><br /></span>presenta y nos muestra <span><br /></span>elementos tangibles, a <span><br /></span>partir de los cuales <span><br /></span>contruimos una realidad, <span><br /></span>o nuestra propia ilusión.</p>
                        <p className=' pt-5'>Una envolvente resuelve el <span><br /></span>espacio. Aparte algunos <span><br /></span>elementos estructurales, <span><br /></span>el àrbol, la escalera, las <span><br /></span>vigas.</p>
                        <p className=''>Arriba una superficie <span><br /></span>traslúcida y la copa del <span><br /></span>árbol.</p>

                    </div>
                </motion.div>
            </div>


            < div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 box-boder px-12 md:px-20 py-10 bg-custom-background" >
                <motion.div
                    className="relative row-span-2 flex items-end justify-content"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url4}
                        alt={`Cava mapa`}

                        style={{ objectFit: "cover" }}

                    />
                </motion.div>
                <motion.div
                    className="relative md:flex md:items-end"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <div className='text-sm md:text-2xl pt-5 md:pt-0 text-right text-gray-800 w-full pr-5'>
                        <p className='leading-relaxed'>En lo técnico:</p>
                        <p className='leading-relaxed'>Se propone una caja separada</p>
                        <p className='leading-relaxed'>de las superficies de pared,</p>
                        <p className='leading-relaxed'>techo y piso.</p>
                        <p className='leading-relaxed'>Con maderas recicladas.</p>
                        <p className='leading-relaxed'>Aplicamos técnicas tradicionales</p>
                        <p className='leading-relaxed'>de construcción en madera.</p>
                        <p className='leading-relaxed'>y envolvimos el espacio</p>
                        <p className='leading-relaxed'>con LINO natural.</p>
                    </div >
                </motion.div>

                <motion.div
                    className='hidden md:flex items-end justify-center w-full'
                    variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url5}
                        alt={`Cava mapa`}

                        style={{ objectFit: "cover" }}

                    />
                </motion.div>
            </div>



            <div className="flex items-end justify-center w-screen grid grid-cols-1 md:grid-cols-7 md:gap-x-10 md:py-10 pl-12 m-0 bg-custom-background">
                <motion.div
                    className='flex mb-5 md:mb-0 hidden md:block'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='text-xs text-center md:text-left md:text-2xl text-gray-800'>
                        <p className='leading-relaxed'>Encontramos </p>
                        <p className='leading-relaxed'>un lugar</p>
                        <p className='leading-relaxed'>en donde</p>
                        <p className='leading-relaxed'>el tiempo</p>
                        <p className='leading-relaxed'>se detiene.</p>
                    </div>
                </motion.div>
                <motion.div
                    className="col-span-6 relative flex items-center justify-self-end"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url7}
                        alt={`Imagen Felo sentada`}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className='flex mb-5 md:mb-0 pt-5 md:hidden'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='text-sm text-left  text-gray-800'>
                        <p className='leading-relaxed'>Encontramos </p>
                        <p className='leading-relaxed'>un lugar</p>
                        <p className='leading-relaxed'>en donde</p>
                        <p className='leading-relaxed'>el tiempo</p>
                        <p className='leading-relaxed'>se detiene.</p>
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center justify-center grid bg-custom-background">
                <motion.div
                    className=" "
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <video className='w-screen' autoPlay muted loop playsInline src="/assets/blog/projects-videos/cava-gif.mp4"></video>
                </motion.div>
                <a href='/assets/blog/pdf/ficha-tecnica-cava.pdf' download>
                    <motion.div
                        className='flex items-center justify-center'
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
            </div>


        </>


    )

}