export default function Carousel() {
    const url1 = '/assets/blog/igiardini/igiardini-1.jpg';
    const url2 = '/assets/blog/igiardini/igiardini-02.jpg';
    const url3 = '/assets/blog/igiardini/igiardini-03.jpg';
    const url4 = '/assets/blog/igiardini/igiardini-04.jpg';
    const url5 = '/assets/blog/igiardini/igiardini-05.jpg';
    const url6 = '/assets/blog/igiardini/igiardini-06.jpg';
    const url9 = '/assets/blog/igiardini/igiardini-09.jpg';
    const url10 = '/assets/blog/igiardini/igiardini-10.jpg';
    const url11 = '/assets/blog/igiardini/igiardini-11.jpg';
    const url12 = '/assets/blog/igiardini/igiardini-12.jpg';

    return (

        <div className="flex overflow-x-scroll h-screen">
            <div className="flex m-0">
                <div className="w-screen p-20 grid grid-cols-1 md:grid-cols-3">

                    <div className="col-span-2 overflow-y-hidden">
                        <img
                            title='Igiardini Vang Gogh'
                            src={url1}
                        />
                    </div>
                    <div className='text-xs text-center md:text-right md:text-sm text-gray-800 leading-relaxed space-y-5 mr-10'>
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


                < div className="w-screen p-20 grid grid-cols-1 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 m-0" >
                    <div className='col-span-3 text-xs text-center md:text-left text-gray-800 space-y-4 indent-8 '>
                        <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
                        <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
                        <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
                        <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
                        <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
                    </div >
                    <div className="row-span-2 col-span-2 zzm-0 overflow-y-hidden">

                        <img
                            title='Igiardini luz'
                            src={url3}
                            className=""
                        />

                    </div>
                    <div className="col-span-3 ">
                        <img
                            title='Igiardini parque'
                            src={url2}
                            className="object-cover"
                        />
                    </div>
                </div >

                < div className="w-screen p-20 overflow-y-hidden" >
                    <div>
                        <img
                            title='Igiardini Adro cultivando'
                            src={url4}
                        />
                    </div>

                </div>







            </div>
        </div>
    )
}