import Image from 'next/image'

export default function Carousel() {


    const url1 = '/assets/blog/igiardini/igiardini-1.jpg';
    const url2 = '/assets/blog/igiardini/igiardini-02.jpg';
    const url3 = '/assets/blog/igiardini/igiardini-03.jpg';
    const url4 = '/assets/blog/igiardini/igiardini-04.jpg';
    const url5 = '/assets/blog/igiardini/igiardini-05.jpg';
    const url6 = '/assets/blog/igiardini/igiardini-06.jpg';
    const url7 = '/assets/blog/igiardini/igiardini-07.jpg';
    const url8 = '/assets/blog/igiardini/igiardini-08.jpg';
    const url9 = '/assets/blog/igiardini/igiardini-09.jpg';
    const url10 = '/assets/blog/igiardini/igiardini-10.jpg';
    const url11 = '/assets/blog/igiardini/igiardini-11.jpg';
    const url12 = '/assets/blog/igiardini/igiardini-12.png';
    const url13 = '/assets/blog/igiardini/igiardini-13.png';


    return (


        // <div className="flex overflow-x-scroll h-screen">
        //     <div className="flex m-0">
        //         <div className="w-screen p-20 grid grid-cols-1 md:grid-cols-3">

        //             <div className="col-span-2 overflow-y-hidden">
        //                 <Image
        //                     src={url1}
        //                     alt={`Van Gogh Image`}
        //                     className="w-full object-cover h-auto group-hover:shadow-lg group-hover:opacity-0 transition-shadow duration-200"
        //                     width={850}
        //                     height={680}
        //                 />
        //             </div>
        //             <div className='text-xs text-center md:text-right md:text-sm text-gray-800 leading-relaxed space-y-5 mr-10'>
        //                 <p>
        //                     Jardines donde cultivar <span className="hidden md:inline"><br /></span> CONSCIENCIA.
        //                 </p>
        //                 <p>Nos conmueve la felicidad que genera <span className="hidden md:inline"><br /></span> cultivar un tomate.</p>
        //                 <p>Nos transportamos a  <span className="hidden md:inline"><br /></span>una pintura de Van Gogh.</p>
        //                 <p>Reinterpretamos una obra de arte, <span className="hidden md:inline"><br /></span>en donde somos partícipes,  <span className="hidden md:inline"><br /></span>sembrando, creando y cultivando.</p>
        //                 <p>Así agudizamos la PRESENCIA <span className="hidden md:inline"><br /></span>y nos conmovemos a diario.</p>
        //                 <p>Fomentamos lo SENCILLO, <span className="hidden md:inline"><br /></span>a través de experiencias FÉRTILES, <span className="hidden md:inline"><br /></span>que guíen a la CONTEMPLACIÓN <span className="hidden md:inline"><br /></span>y la conexión con la TIERRA. </p >
        //             </div >
        //         </div>


        //         < div className="w-screen p-20 grid grid-cols-1 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 m-0" >
        //             <div className='col-span-3 text-xs text-center md:text-left text-gray-800 space-y-4 indent-8 '>
        //                 <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
        //                 <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
        //                 <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
        //                 <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
        //                 <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
        //             </div >
        //             <div className="row-span-2 col-span-2 zzm-0 overflow-y-hidden">

        //                 <img
        //                     title='Igiardini luz'
        //                     src={url3}
        //                     className=""
        //                 />

        //             </div>
        //             <div className="col-span-3 ">
        //                 <img
        //                     title='Igiardini parque'
        //                     src={url2}
        //                     className="object-cover"
        //                 />
        //             </div>
        //         </div >

        //         < div className="w-screen p-20 overflow-y-hidden" >
        //             <div>
        //                 <img
        //                     title='Igiardini Adro cultivando'
        //                     src={url4}
        //                 />
        //             </div>

        //         </div>







        //     </div>
        // </div>
        <div className="flex overflow-x-scroll h-screen bg-white">
            <div className='flex py-10'>

                <div className="w-screen grid grid-cols-1 md:grid-cols-3 ml-10">

                    <div className="col-span-2 image-container overflow-y-hidden">
                        <Image
                            src={url1}
                            alt={`Van Gogh Image`}
                            className={'image'}
                            layout='fill'


                        />
                    </div>
                    <div className='text-xs text-center md:text-right md:text-sm text-gray-800 leading-relaxed space-y-5 mr-10 mt-10'>
                        <p>
                            Jardines donde cultivar <span className="hidden md:inline"><br /></span> CONSCIENCIA.
                        </p>
                        <p>Nos conmueve la felicidad que genera <span className="hidden md:inline"><br /></span> cultivar un tomate.</p>
                        <p>Nos transportamos a  <span className="hidden md:inline"><br /></span>una pintura de Van Gogh.</p>
                        <p>Reinterpretamos una obra de arte, <span className="hidden md:inline"><br /></span>en donde somos partícipes,  <span className="hidden md:inline"><br /></span>sembrando, creando y cultivando.</p>
                        <p>Así agudizamos la PRESENCIA <span className="hidden md:inline"><br /></span>y nos conmovemos a diario.</p>
                        <p>Fomentamos lo SENCILLO, <span className="hidden md:inline"><br /></span>a través de experiencias FÉRTILES, <span className="hidden md:inline"><br /></span>que guíen a la CONTEMPLACIÓN <span className="hidden md:inline"><br /></span>y la conexión con la TIERRA. </p >
                    </div >
                </div>


                < div className="w-screen grid grid-cols-1 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 ml-10" >
                    <div className='col-span-3 text-xs md:text-left text-gray-800 space-y-4 indent-8'>
                        <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
                        <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                        <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                        <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                        <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                    </div >
                    <div className="row-span-2 col-span-2 image-container-vertical mx-20 overflow-y-hidden">

                        <Image
                            src={url3}
                            alt={`Igiardini parque`}
                            className={'image'}
                            layout='fill'

                        />

                    </div>
                    <div className="col-span-3 image-container-xs mt-5 overflow-y-hidden">
                        <Image
                            src={url2}
                            alt={`Igiardini parque`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                </div >


                <div className="image-container-wscreen mr-10 overflow-y-hidden">
                    <Image
                        src={url4}
                        alt={`Igiardini Adro Cultivando`}
                        className={'image'}
                        layout='fill'

                    />
                </div>

                < div className="w-screen grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 ml-10" >
                    <div className="row-span-3 image-container-50">
                        <Image
                            src={url5}
                            alt={`Igiardini plano y pintura`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                    <div className="image-container-25">
                        <Image
                            src={url6}
                            alt={`Igiardini madera`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>

                    <div className='flex items-center justify-center mt-20'>
                        <div className='text-xs text-center md:text-left leading-relaxed  text-gray-800 space-y-4 '>
                            <p>MATERIALIZAMOS CONSCIENCIA, EN HUERTAS DISEÑADAS PARA LOGRAR EL BIENESTAR DEL USUARIO.</p>
                            <p>UNA ESTRUCTURA DE MADERA TRATADA MEDIANTE "YAKISUGI", MÉTODO ANCESTRAL JAPONÉS.</p>
                            <p>ALTURA DE TRABAJO ÓPTIMA, LLEVANDO LA TIERRA Y LA CULTURA AL ALCANCE DE LA MANO.</p>
                            <p>ARQUITECTURA ADAPTABLE, MODULABLE, TIMELESS, MIRMA ESTRUCTURA/DIFERENTES FUNCIONES.</p>
                            <p>PROCESOS AMIGABLES CON EL MEDIO AMBIENTE, APRENDIZAJE E INTERCAMBIO CONTÍNUO.</p>
                            <p className="md:text-center">¿EN QUÉ ESPACIOS DE TU VIDA TE IMAGINÁS IGIARDINI?</p>
                        </div >
                    </div>
                </div>
                < div className="w-screen grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 ml-20" >
                    <div className="image-container-vertical-xs">
                        <Image
                            src={url7}
                            alt={`Igiardini techo`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                    <div className="image-container-vertical-xs mt-40">
                        <Image
                            src={url8}
                            alt={`Igiardini techo 2`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                    <div className="image-container-vertical-xs mr-10">
                        <Image
                            src={url12}
                            alt={`Igiardini grafico`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                </div>
                <div className="image-container-wscreen mx-10 overflow-y-hidden">
                    <Image
                        src={url9}
                        alt={`Igiardini Fuego`}
                        className={'image'}
                        layout='fill'

                    />
                </div>
                < div className="w-screen grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 ml-20" >
                    <div className="image-container-vertical">
                        <Image
                            src={url10}
                            alt={`Igiardini Adro cultivando 3`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                    <div className=''>
                        <div className='text-xs text-center md:text-left leading-relaxed  text-gray-800 space-y-4'>
                            <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
                            <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                            <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                            <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                            <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                        </div>
                        <div className="image-container-vertical-contain mt-20">
                            <Image
                                src={url13}
                                alt={`Zanahoria Igiardini`}
                                className={'image'}
                                layout='fill'

                            />
                        </div>
                    </div>
                    <div className="image-container-vertical mr-10">
                        <Image
                            src={url11}
                            alt={`Igiardini Adro cultivando 4`}
                            className={'image'}
                            layout='fill'

                        />
                    </div>
                </div>

            </div>

        </div>
    )
}