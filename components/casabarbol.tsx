import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'

import url1 from '../public/assets/blog/casabarbol-img/nido.png';
import url2 from '../public/assets/blog/casabarbol-img/croquis.png';
import url3 from '../public/assets/blog/casabarbol-img/algodon.png';
import url4 from '../public/assets/blog/casabarbol-img/casabarbol-graph.png';
import url5 from '../public/assets/blog/casabarbol-img/casabarbol-esquema.png';
import url6 from '../public/assets/blog/casabarbol-img/casabarbol-gif.gif';
import url7 from '../public/assets/blog/casabarbol-img/casabarbol-desgloce.png';
import url8 from '../public/assets/blog/casabarbol-img/grid1.png';
import url9 from '../public/assets/blog/casabarbol-img/grid2.png';
import url10 from '../public/assets/blog/casabarbol-img/grid3.png';
import url11 from '../public/assets/blog/casabarbol-img/grid4.png';




export default function Casabarbol() {

    return (
        <>


            <div className="font-mono bg-custom-background flex w-screen items-center justify-content place-content-evenly grid grid-cols-3 md:space-x-5 md:space-y-0 md:p-10 pb-5">

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
                    className="flex items-center justify-center flex-col "
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

                        <p className=''>Proyectar como un niño,<span><br /></span>para un niño.</p>
                        <p className=' pt-5'>La analogía entre<span><br /></span>sentirse protegido<span><br /></span>en el momento previo<span><br /></span>al nacimiento,<span><br /></span> en el vientre materno.</p>
                        <p className=''>Luego, como si de una <span><br /></span>ventana se tratase, la luz<span><br /></span>se presenta y nos muestra<span><br /></span>elementos tangibles,<span><br /></span>a partir de los cuales<span><br /></span>contruimos una realidad,<span><br /></span>o nuestra propia ilusión.</p>
                        <p className=' pt-5'>Una envolvente resuelve el<span><br /></span>espacio. Aparte<span><br /></span>algunos elementos estructurales,<span><br /></span>el àrbol,<span><br /></span>la escalera,<span><br /></span>las vigas.</p>
                        <p className=''>Arriba una superficie <span><br /></span>traslúcida y la copa del <span><br /></span>árbol.</p>

                    </div>
                </motion.div>
            </div>
            <div className="font-mono relative w-screen grid grid-cols-1 pt-20 md:pl-0 md:pt-10 bg-custom-background">
                <div className='hidden md:block absolute top-0 left-0 text-left pt-20 pl-10 text-lg text-gray-800'>
                    <p>Buscamos entablar una <span><br /></span> conversación, entre <span><br /></span>nosotros y la naturaleza, <span><br /></span>mediante el lenguaje del <span><br /></span>arte y la arquitectura.</p>
                    <p>Definimos el proyecto <span><br /></span>entre algunos arquetipos, <span><br /></span>un árbol, y la voluntad de <span><br /></span>SER, con todas nuestras <span><br /></span>fuerzas.</p>
                    <p className='pt-5'>"No puede haber amor si no <span><br /></span>se es uno con todas sus <span><br /></span>fuerzas".</p>
                    <p>Ítalo Calvino, "El Barón <span><br /></span>rampante.</p>
                    <p className='pt-5'> 3d y edición: Ana Clara Pinasco</p>
                </div>
                <motion.div
                    className='relative'
                    variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit='hidden'>
                    <Image
                        src={url7}
                        alt={`Casabarbol Desgloce`}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
                <div className='md:hidden text-sm text-left py-5 pl-10 text-gray-800'>
                    <p>Buscamos entablar una <span><br /></span> conversación, entre <span><br /></span>nosotros y la naturaleza, <span><br /></span>mediante el lenguaje del <span><br /></span>arte y la arquitectura.</p>
                    <p>Definimos el proyecto <span><br /></span>entre algunos arquetipos, <span><br /></span>un árbol, y la voluntad de <span><br /></span>SER, con todas nuestras <span><br /></span>fuerzas.</p>
                    <p className='pt-5'>"No puede haber amor si no <span><br /></span>se es uno con todas sus <span><br /></span>fuerzas".</p>
                    <p>Ítalo Calvino, "El Barón <span><br /></span>rampante.</p>
                    <p className='pt-5'> 3d y edición: Ana Clara Pinasco</p>
                </div>
            </div>


            <div className="bg-custom-background flex w-screen items-center justify-content place-content-evenly grid grid-cols-2 md:grid-cols-4">
                <motion.div
                    className="hidden md:flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url8}
                        alt={`Casabarbol Foto 1`}
                        width={400}
                        height={400}

                    />
                </motion.div>
                <motion.div
                    className="flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url9}
                        alt={`Casabarbol Foto 2`}
                        width={400}
                        height={400}

                    />
                </motion.div>
                <motion.div
                    className="hidden md:flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url10}
                        alt={`Casabarbol Foto 3`}
                        width={400}
                        height={400}

                    />
                </motion.div>
                <motion.div
                    className="flex items-center justify-center flex-col"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url11}
                        alt={`Casabarbol Foto 4`}
                        width={400}
                        height={400}

                    />
                </motion.div>
            </div>

        </>

    )

}