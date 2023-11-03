import Carousel from "./Carousel";

const PostBody = () => {
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

  let slides = [url1];

  return (
    <>
      <section className="overflow-hidden">

        <div className="w-[100%] overflow-x-scroll overflow-y-hidden">
          <Carousel />
        </div>

        <div className="">

          < div className="grid grid-cols-1 gap-y-10 mb-8 md:grid-cols-3 md:gap-x-10 lg:gap-x-10 flex items-center md:mb-10 " >
            <div className="col-span-2">
              <img
                title='Igiardini Vang Gogh'
                src={url1}
                className="object-cover w-full h-full"
                style={{ width: '100%', height: '100%' }}

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
          </div >

          < div className="grid grid-cols-1 gap-y-10 mb-8 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 flex items-center " >
            <div className='col-span-3 text-xs text-center md:text-left text-gray-800 space-y-4 indent-8'>
              <p>IGIARDINI HACE FOCO EN LO QUE NO SE VE.</p>
              <p>UNAS BASES SÓLIDAS, HABITABLES, RESUELVEN EL PROYECTO: UNA HUERTA.</p>
              <p>EN UN PASEO CONTEMPLATIVO, BAJAMOS, CONECTAMOS CON LAS RAÍCES,</p>
              <p>Y GENERAMOS INTERCAMBIO CON LA TIERRA.</p>
              <p>LOS FRUTOS SON EL RESULTADO DE UN TRABAJO CONSCIENTE.</p>
            </div >
            <div className="row-span-2 col-span-2 relative">
              <img
                title='Igiardini luz'
                src={url3}
                className="object-cover h-full"
              />
            </div>
            <div className="col-span-3 relative">
              <img
                title='Igiardini parque'
                src={url2}
                className="object-cover h-full"
              />
            </div>
          </div >

          < div className="grid grid-cols-1 gap-y-10 mb-8 md:grid-cols-5 md:gap-x-10 lg:gap-x-10 flex items-center " >
            <div className="row-span-2 col-span-5 relative ml-40">
              <img
                title='Igiardini Adro cultivando'
                src={url4}
                className="object-cover h-full"
              />
            </div>

            <div className="row-span-2 col-span-3 relative">
              <img
                title='igiardini plano y pintura'
                src={url5}
                className="object-cover w-full h-full"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            <div className="relative col-span-2">
              <img
                title='Igiardini madera'
                src={url6}
                height="h-max-50"
                className=""
              />
            </div>

            <div className='col-span-2 text-xs text-center md:text-left leading-relaxed  text-gray-800 space-y-4 mr-10'>
              <p>MATERIALIZAMOS CONSCIENCIA, EN HUERTAS DISEÑADAS PARA LOGRAR EL BIENESTAR DEL USUARIO.</p>
              <p>UNA ESTRUCTURA DE MADERA TRATADA MEDIANTE "YAKISUGI", MÉTODO ANCESTRAL JAPONÉS.</p>
              <p>ALTURA DE TRABAJO ÓPTIMA, LLEVANDO LA TIERRA Y LA CULTURA AL ALCANCE DE LA MANO.</p>
              <p>ARQUITECTURA ADAPTABLE, MODULABLE, TIMELESS, MIRMA ESTRUCTURA/DIFERENTES FUNCIONES.</p>
              <p>PROCESOS AMIGABLES CON EL MEDIO AMBIENTE, APRENDIZAJE E INTERCAMBIO CONTÍNUO.</p>
              <p className="md:text-center">¿EN QUÉ ESPACIOS DE TU VIDA TE IMAGINÁS IGIARDINI?</p>
            </div >

            <div className="row-span-2 col-span-5 relative mr-40">
              <img
                title='Igiardini fuego'
                src={url9}
                className="object-cover h-full"
              />
            </div>

            <div className="row-span-3 col-span-2 relative">
              <img
                title='Igiardini Adro cultivando 2'
                src={url10}
                className="object-cover h-full"
              />
            </div>

            <div className='text-xs text-center md:text-left leading-relaxed  text-gray-800 space-y-4'>
              <p>MATERIALIZAMOS CONSCIENCIA, EN HUERTAS DISEÑADAS PARA LOGRAR EL BIENESTAR DEL USUARIO.</p>
              <p>UNA ESTRUCTURA DE MADERA TRATADA MEDIANTE "YAKISUGI", MÉTODO ANCESTRAL JAPONÉS.</p>
              <p className="md:text-center">¿EN QUÉ ESPACIOS DE TU VIDA TE IMAGINÁS IGIARDINI?</p>
              <img
                title='Igiardini Adro cultivando 2'
                src={url12}
                className="object-cover h-full"
              />
            </div >

            <div className="row-span-3 col-span-2 relative">
              <img
                title='Igiardini Logo Zanahoria'
                src={url11}
                className="object-cover h-full"
              />
            </div>

          </div >
        </div>
      </section >
    </>

  )
}

export default PostBody
