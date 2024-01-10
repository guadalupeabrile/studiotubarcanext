import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'

import url1 from '../public/assets/blog/casabarbol-img/nido.png';
import url2 from '../public/assets/blog/casabarbol-img/croquis.png';
import url3 from '../public/assets/blog/casabarbol-img/algodon.png';
import url4 from '../public/assets/blog/cava-img/cava-grid-3.webp';
import url5 from '../public/assets/blog/cava-img/cava-grid-4.webp';
import url6 from '../public/assets/blog/cava-img/cava-grid-5.webp';
import url7 from '../public/assets/blog/cava-img/cava-grid-6.webp';
import flor from '../public/assets/blog/footer/flor-manifiesto.png';




export default function Casabarbol() {

    return (
        <>


            <div className="bg-custom-background flex w-screen items-center justify-content place-content-evenly grid grid-cols-1 md:grid-cols-3 md:space-x-5 p-10">

                <motion.div
                    className="flex justify-center"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`Imagen silla en cava`}
                        width={250}
                        height={250}

                    />
                </motion.div>
                <motion.div
                    className="flex justify-center"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url2}
                        alt={`Imagen silla en cava`}
                        width={250}
                        height={250}

                    />
                </motion.div>
                <motion.div
                    className="flex justify-center"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url3}
                        alt={`Imagen silla en cava`}
                        width={250}
                        height={250}

                    />
                </motion.div>
            </div>

            <div className="relative w-screen h-screen grid grid-cols-1 md:pr-20 md:pl-0 md:py-10 bg-custom-background">
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url3}
                        alt={`Felicitas caminando por cava`}
                        fill
                        style={{ objectFit: "cover" }}

                    />
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

            <div className="flex w-screen h-screen grid grid-cols-1 md:grid-cols-4 md:gap-x-10 md:pr-20  m-0 bg-custom-background">
                <motion.div
                    className=" md:col-span-3 row-span-6 md:row-span-1 relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url6}
                        alt={`Botellas en Cava`}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <motion.div
                    className='relative flex md:items-end items-start  justify-center'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <div className='text-sm text-center pt-10 md:text-left md:text-2xl text-gray-800'>

                        <p className='leading-relaxed'>El mobiliario en donde se apoyan</p>
                        <p className='leading-relaxed'>los vinos, fue creado por Rafael</p>
                        <p className='leading-relaxed'>Iglesia y Gustavo Farias</p>
                        <p className='leading-relaxed'>A quienes agradecemos por su</p>
                        <p className='leading-relaxed'>humanidad y grandioso aporte a</p>
                        <p className='leading-relaxed'>la materia.</p>
                    </div>
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