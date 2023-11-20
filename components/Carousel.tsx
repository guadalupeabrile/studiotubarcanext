import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions';
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
import url12 from '../public/assets/blog/igiardini-img/igiardini-12-min.webp';
import url13 from '../public/assets/blog/igiardini-img/igiardini-13-min.webp';


export default function Carousel() {

    return (

        <div className="flex overflow-x-scroll h-screen bg-custom-background">
            <div className='flex py-10'>
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
                    <div className="relative">
                        <Image
                            src={url7}
                            alt={`Igiardini techo`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={url8}
                            alt={`Igiardini techo 2`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                    <div className="relative">
                        <Image
                            src={url12}
                            alt={`Igiardini grafico`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                </div>
                <div className="box-border w-screen grid px-10">
                    <div className='relative'>
                        <Image
                            src={url9}
                            alt={`Igiardini Fuego`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                </div>
                < div className="w-screen grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 border-box px-10" >
                    <div className="relative">
                        <Image
                            src={url10}
                            alt={`Igiardini Adro cultivando 3`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                    <div className='grid'>
                        <div className='text-xs md:text-sm text-center md:text-left leading-relaxed  text-gray-800 space-y-4'>
                            <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
                            <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                            <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                            <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                            <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                        </div>
                        <div className="relative row-span-6">
                            <Image
                                src={url13}
                                alt={`Zanahoria Igiardini`}
                                className={'image'}
                                layout='fill'
                                objectFit='contain'

                            />
                        </div>
                    </div>
                    <div className="relative hidden md:flex">
                        <Image
                            src={url11}
                            alt={`Igiardini Adro cultivando 4`}
                            className={'image'}
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                </div>

            </div>

        </div>
    )
}