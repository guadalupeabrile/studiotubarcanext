import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionTransitions'


import url1 from '../public/assets/blog/love-img/love-langosta.png';
import url2 from '../public/assets/blog/love-img/love-eyes.png'
import url3 from '../public/assets/blog/mesatelite-img/mesat-1.jpg'
import url4 from '../public/assets/blog/mesatelite-img/mesat-diag.png'
import url5 from '../public/assets/blog/mesatelite-img/mesat-2.jpg'
import url6 from '../public/assets/blog/mesatelite-img/mesat-3.jpg'
import url7 from '../public/assets/blog/mesatelite-img/mesat-4.jpg'
import url8 from '../public/assets/blog/mesatelite-img/mesat-5.png'
import url9 from '../public/assets/blog/mesatelite-img/mesat-6.jpg'
import flor from '../public/assets/blog/footer/flor-manifiesto.png';




export default function Lovesther() {

    return (
        <>


            <div className="relative h-screen w-screen box-border bg-love-background bg-custom-background">
                <motion.div
                    className="md:hidden absolute -top-48"
                    variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit='hidden'
                >
                    <Image
                        src={url1}
                        alt={`Diagramas Mesatelites`}
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
                        alt={`Diagramas Mesatelites`}
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
                        alt={`Diagramas Mesatelites`}
                        className='w-3/5'
                        style={{ objectFit: "cover" }}

                    />
                </motion.div>
            </div>


        </>


    )

}