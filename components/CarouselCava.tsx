import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules'

import url1 from '../public/assets/blog/cava-img/cava-name.png';
import url2 from '../public/assets/blog/cava-img/cava-grid-1.jpg';
import url3 from '../public/assets/blog/cava-img/cava-grid-2.jpg';
import url4 from '../public/assets/blog/cava-img/cava-grid-3.png';
import url5 from '../public/assets/blog/cava-img/cava-grid-4.png';
import url6 from '../public/assets/blog/cava-img/cava-grid-5.jpg';
import url7 from '../public/assets/blog/cava-img/cava-grid-6.jpg';
import url8 from '../public/assets/blog/igiardini-img/igiardini-08-min.webp';
import url9 from '../public/assets/blog/igiardini-img/igiardini-09-min.webp';
import url10 from '../public/assets/blog/igiardini-img/igiardini-10-min.webp';
import url11 from '../public/assets/blog/igiardini-img/igiardini-11-min.webp';
import url12 from '../public/assets/blog/igiardini-img/igiardini-12-min.webp';
import url13 from '../public/assets/blog/igiardini-img/igiardini-13-min.webp';


export default function CarouselCava() {

    return (
        <Swiper
            navigation={true}
            modules={[EffectFade, Navigation]}
            effect={'fade'}
            className='h-screen bg-custom-background'
        >
            <SwiperSlide>
                <div className='fixed top-20 left-20 z-10'>
                    <Image
                        src={url1}
                        alt={`Cava Name`}
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex w-screen h-screen grid grid-cols-1 md:grid-cols-4 md:gap-x-10 box-border px-12 md:px-20 py-10 m-0">
                    <motion.div
                        className='row-end-5 text-xs text-center md:text-left md:text-base text-gray-800 leading-relaxed space-y-2 '
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <p>ÇAVA surge desde adentro, de la tierra, cómo si
                        </p>
                        <p>habitásemos las profundidades.</p>
                        <p>A veces incómodas,</p>
                        <p>paradójicamente desconocidas</p>
                        <p>pero seguras,</p>
                        <p>nos proporcionan una temperatura</p>
                        <p>casi invariable,</p>
                        <p>nos generan seguridad y abrigo</p>

                    </motion.div>
                    <motion.div
                        className="row-span-4 col-span-3 relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={url2}
                            alt={`Imagen silla en cava`}
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
                            src={url3}
                            alt={`Felicitas caminando por cava`}
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                < div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 box-boder px-12 md:px-20 py-10 bg-custom-background" >
                    <motion.div
                        className="relative row-span-2 flex items-center justify-content"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url4}
                            alt={`Cava mapa`}

                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                    <motion.div
                        className="relative flex items-end"
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <div className='text-xs md:text-sm text-center md:text-left text-gray-800'>
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
                        className='flex items-center justify-center'
                        variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url5}
                            alt={`Cava mapa`}

                            style={{ objectFit: "cover" }}

                        />
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex w-screen h-screen grid grid-cols-1 md:grid-cols-4 md:gap-x-10 box-border px-12 md:px-20 py-10 m-0 bg-custom-background">
                    <motion.div
                        className=" col-span-3 relative"
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
                        className='relative flex items-end'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <div className='text-xs text-center md:text-left md:text-sm text-gray-800'>

                            <p className='leading-relaxed'>El mobiliario en donde se apoyan</p>
                            <p className='leading-relaxed'>los vinos, fue creado por Rafael</p>
                            <p className='leading-relaxed'>Iglesia y Gustavo Farias</p>
                            <p className='leading-relaxed'>A quienes agradecemos por su</p>
                            <p className='leading-relaxed'>humanidad y grandioso aporte a</p>
                            <p className='leading-relaxed'>la materia.</p>
                        </div>
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="flex w-screen h-screen grid grid-cols-1 md:grid-cols-7 md:gap-x-10 box-border px-12 md:px-20 py-10 m-0 bg-custom-background">
                    <motion.div
                        className='flex items-end grid justify-items-end'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <div className='text-xs text-center md:text-left md:text-base text-gray-800'>
                            <p className='leading-relaxed'>Encontramos </p>
                            <p className='leading-relaxed'>un lugar</p>
                            <p className='leading-relaxed'>en donde</p>
                            <p className='leading-relaxed'>el tiempo</p>
                            <p className='leading-relaxed'>se detiene.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="col-span-6 relative"
                        variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                    >
                        <Image
                            src={url7}
                            alt={`Imagen silla en cava`}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                </div>
            </SwiperSlide>

        </Swiper>

        /* <div className='flex py-10'>
            <div className="w-screen grid grid-cols-1 md:grid-cols-3 md:gap-x-10 box-border px-10 m-0">

                <motion.div
                    className="row-span-4 col-span-2 relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`Van Gogh Image`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'
                    />
                </motion.div>
                <motion.div
                    className='text-xs text-center md:text-right md:text-base text-gray-800 leading-relaxed space-y-5  mt-10'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <p>
                        Jardines donde cultivar <span className="hidden md:inline"><br /></span> CONSCIENCIA.
                    </p>
                    <p>Nos conmueve la felicidad que genera <span className="hidden md:inline"><br /></span> cultivar un tomate.</p>
                    <p>Nos transportamos a  <span className="hidden md:inline"><br /></span>una pintura de Van Gogh.</p>
                    <p>Reinterpretamos una obra de arte, <span className="hidden md:inline"><br /></span>en donde somos partícipes,  <span className="hidden md:inline"><br /></span>sembrando, creando y cultivando.</p>
                    <p>Así agudizamos la PRESENCIA <span className="hidden md:inline"><br /></span>y nos conmovemos a diario.</p>
                    <p>Fomentamos lo SENCILLO, <span className="hidden md:inline"><br /></span>a través de experiencias FÉRTILES, <span className="hidden md:inline"><br /></span>que guíen a la CONTEMPLACIÓN <span className="hidden md:inline"><br /></span>y la conexión con la TIERRA. </p >
                </motion.div>
            </div>


            < div className="w-screen grid grid-cols-1 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 box-border px-10" >

                <motion.div
                    className='col-span-3 text-xs md:text-base md:text-left text-gray-800 space-y-4'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
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
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />

                </motion.div>
                <motion.div
                    className="hidden md:flex col-span-3 row-span-5 relative"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url2}
                        alt={`Igiardini parque`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
            </div >


            <div className="box-border w-screen grid px-10">
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url4}
                        alt={`Igiardini Adro Cultivando`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
            </div>

            < div className="w-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 box-boder px-10" >
                <motion.div
                    className="row-span-3 relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url5}
                        alt={`Igiardini plano y pintura`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
                <motion.div
                    className="hidden md:flex relative row-span-2"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url6}
                        alt={`Igiardini madera`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>

                <motion.div
                    className='flex items-center justify-center'
                    variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <div className='text-xs md:text-sm text-center md:text-left leading-relaxed  text-gray-800 space-y-4 '>
                        <p>MATERIALIZAMOS CONSCIENCIA, EN HUERTAS DISEÑADAS PARA LOGRAR EL BIENESTAR DEL USUARIO.</p>
                        <p>UNA ESTRUCTURA DE MADERA TRATADA MEDIANTE "YAKISUGI", MÉTODO ANCESTRAL JAPONÉS.</p>
                        <p>ALTURA DE TRABAJO ÓPTIMA, LLEVANDO LA TIERRA Y LA CULTURA AL ALCANCE DE LA MANO.</p>
                        <p>ARQUITECTURA ADAPTABLE, MODULABLE, TIMELESS, MIRMA ESTRUCTURA/DIFERENTES FUNCIONES.</p>
                        <p>PROCESOS AMIGABLES CON EL MEDIO AMBIENTE, APRENDIZAJE E INTERCAMBIO CONTÍNUO.</p>
                        <p className="md:text-center">¿EN QUÉ ESPACIOS DE TU VIDA TE IMAGINÁS IGIARDINI?</p>
                    </div >
                </motion.div>
            </div>

            < div className="w-screen grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 border-box px-10" >
                <motion.div
                    className="relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url7}
                        alt={`Igiardini techo`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
                <motion.div
                    className="relative"
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url8}
                        alt={`Igiardini techo 2`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
                <motion.div
                    className="relative"
                    variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url12}
                        alt={`Igiardini grafico`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
            </div>
            <div className="box-border w-screen grid px-10">
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url9}
                        alt={`Igiardini Fuego`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
            </div>
            < div className="w-screen grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 border-box px-10" >
                <motion.div
                    className="relative"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url10}
                        alt={`Igiardini Adro cultivando 3`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
                <div className='grid'>
                    <motion.div
                        className='text-xs md:text-sm text-center md:text-left leading-relaxed  text-gray-800 space-y-4'
                        variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
                        <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                        <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                        <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                        <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                    </motion.div>
                    <motion.div
                        className="relative row-span-6"
                        variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit='hidden'>
                        <Image
                            src={url13}
                            alt={`Zanahoria Igiardini`}
                            className={'image'}
                            layout='fill'
                            objectFit='contain'

                        />
                    </motion.div>

                </div>
                <motion.div
                    className="relative hidden md:flex"
                    variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url11}
                        alt={`Igiardini Adro cultivando 4`}
                        className={'image'}
                        layout='fill'
                        objectFit='cover'

                    />
                </motion.div>
            </div>

        </div> */

    )

}