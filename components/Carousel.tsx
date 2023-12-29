import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules'

import nameLogo from '../public/assets/blog/projects-name/igiardini-name-h.png';
import url1 from '../public/assets/blog/igiardini-img/igiardini-1-min.webp';
import url2 from '../public/assets/blog/igiardini-img/igiardini-02-min.webp';
import url3 from '../public/assets/blog/igiardini-img/igiardini-03-min.webp';
import url4 from '../public/assets/blog/igiardini-img/igiardini-04-min.webp';
import url5 from '../public/assets/blog/igiardini-img/igiardini-05-min.webp';
import url6 from '../public/assets/blog/igiardini-img/igiardini-06-min.webp';
import url7 from '../public/assets/blog/igiardini-img/igiardini-07-min.webp';
import url8 from '../public/assets/blog/igiardini-img/igiardini-08-min.webp';
import url9 from '../public/assets/blog/igiardini-img/igiardini-09-min.webp';
import url10 from '../public/assets/blog/igiardini-img/igiardini-10-min.webp';
import url11 from '../public/assets/blog/igiardini-img/igiardini-11-min.webp';
import url12 from '../public/assets/blog/igiardini-img/igiardini-12.png';
import url13 from '../public/assets/blog/igiardini-img/igiardini-13-min.webp';


export default function Carousel() {

    return (
        <Swiper
            navigation={true}
            modules={[EffectFade, Navigation]}
            effect={'fade'}
            className='h-screen bg-custom-background'
        >
            <SwiperSlide>
                <div className="flex w-screen h-screen grid grid-cols-1 md:grid-cols-3 md:gap-x-10 box-border px-12 md:px-20 py-10 m-0">
                    <motion.div
                        className="row-span-4 col-span-2 relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={url1}
                            alt={`Van Gogh Image`}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                    <motion.div
                        className='text-xs text-center md:text-left md:text-base text-gray-800 leading-relaxed space-y-5  mt-10'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={nameLogo}
                            alt={`Logo Igiardini`}

                            objectFit='cover w-full'

                        />

                        <p>Jardines donde cultivar CONSCIENCIA.</p>
                        <p>Nos conmueve la felicidad que genera cultivar un tomate.</p>
                        <p>Nos transportamos a una pintura de Van Gogh.</p>
                        <p>Reinterpretamos una obra de arte, <span className="hidden md:inline"><br /></span>en donde somos partícipes,  <span className="hidden md:inline"><br /></span>sembrando, creando y cultivando.</p>
                        <p>Así agudizamos la PRESENCIA <span className="hidden md:inline"><br /></span>y nos conmovemos a diario.</p>
                        <p>Fomentamos lo SENCILLO, <span className="hidden md:inline"><br /></span>a través de experiencias FÉRTILES, <span className="hidden md:inline"><br /></span>que guíen a la CONTEMPLACIÓN <span className="hidden md:inline"><br /></span>y la conexión con la TIERRA. </p >
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                < div className="w-screen h-screen grid grid-cols-1 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 box-border px-12 md:px-20 md:text-base py-10 bg-custom-background" >
                    <motion.div
                        className='col-span-3 text-xs md:text-base md:text-left text-gray-800 space-y-4'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <p>IGIARDINI HACE FOCO EN LO QUE NO SE VÉ.</p>
                        <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                        <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                        <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                        <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                    </motion.div >
                    <motion.div
                        className="row-span-6 col-span-2 relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={url3}
                            alt={`Igiardini parque`}
                            fill
                            style={{ objectFit: "cover" }}

                        />

                    </motion.div>
                    <motion.div
                        className="hidden md:flex col-span-3 row-span-5 relative"
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url2}
                            alt={`Igiardini parque`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div >
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-screen box-border w-screen grid px-12 md:px-20 py-10 bg-custom-background">
                    <motion.div
                        className='relative'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url4}
                            alt={`Igiardini Adro Cultivando`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                < div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 box-boder px-12 md:px-20 py-10 bg-custom-background" >
                    <motion.div
                        className="row-span-3 relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url5}
                            alt={`Igiardini plano y pintura`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                    <motion.div
                        className="hidden md:flex relative row-span-2"
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url6}
                            alt={`Igiardini madera`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-center'
                        variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <div className='text-xs md:text-base text-center md:text-left leading-relaxed  text-gray-800 space-y-4 '>
                            <p>MATERIALIZAMOS CONSCIENCIA, EN HUERTAS DISEÑADAS PARA LOGRAR EL BIENESTAR DEL USUARIO.</p>
                            <p>UNA ESTRUCTURA DE MADERA TRATADA MEDIANTE "YAKISUGI", MÉTODO ANCESTRAL JAPONÉS.</p>
                            <p>ALTURA DE TRABAJO ÓPTIMA, LLEVANDO LA TIERRA Y LA CULTURA AL ALCANCE DE LA MANO.</p>
                            <p>ARQUITECTURA ADAPTABLE, MODULABLE, TIMELESS, MIRMA ESTRUCTURA/DIFERENTES FUNCIONES.</p>
                            <p>PROCESOS AMIGABLES CON EL MEDIO AMBIENTE, APRENDIZAJE E INTERCAMBIO CONTÍNUO.</p>
                            <p className="md:text-center">¿EN QUÉ ESPACIOS DE TU VIDA TE IMAGINÁS IGIARDINI?</p>
                        </div >
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                < div className="w-screen h-screen bg-custom-background grid grid-cols-1  md:grid-cols-3 border-box px-12 md:px-20 py-10" >
                    <motion.div
                        className="relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url7}
                            alt={`Igiardini techo`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                    <motion.div
                        className="relative row-span-2 col-span-2"
                        variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url12}
                            alt={`Igiardini grafico`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                    <motion.div
                        className="relative"
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url8}
                            alt={`Igiardini techo 2`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-screen box-border w-screen grid px-12 md:px-20 py-10 bg-custom-background">
                    <motion.div
                        className='relative'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url9}
                            alt={`Igiardini Fuego`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                < div className="w-screen h-screen bg-custom-background grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 border-box px-12 md:px-20 py-10" >
                    <motion.div
                        className="relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url10}
                            alt={`Igiardini Adro cultivando 3`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                    <div className='grid'>
                        <motion.div
                            className='text-xs md:text-base text-center md:text-left text-gray-800 '
                            variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                            <p className='leading-loose'>QUÉ APORTA IGIARDINI A TU VIDA?</p>
                            <p className='leading-loose'>Conexión con la NATURALEZA y PRESENCIA.</p>
                            <p className='leading-loose'>Ejercicio físico y SALUD.</p>
                            <p className='leading-loose'>Alimentación saludable y nutrición.</p>
                            <p className='leading-loose'>Sentimiento de logro y autoestima.</p>
                            <p className='leading-loose'>Tiempo al aire libre, al SOL.</p>
                            <p className='leading-loose'>Práctica de paciencia y perseverancia.</p>
                            <p>BRINDAMOS HERRAMIENTAS PARA TRANSFORMAR TU PRESENTE.</p>
                        </motion.div>
                        <motion.div
                            className="relative row-span-6"
                            variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                            <Image
                                src={url13}
                                alt={`Zanahoria Igiardini`}
                                fill
                                style={{ objectFit: "contain" }}

                            />
                        </motion.div>

                    </div>
                    <motion.div
                        className="relative hidden md:flex"
                        variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url11}
                            alt={`Igiardini Adro cultivando 4`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>
        </Swiper>

    )

}