
import type Post from '../interfaces/post'
import Link from 'next/link'
import Image from 'next/image'


type Props = {
  nextProject: string
  manifiesto: string
  nextProjectImg: string
}

const Footer = ({ nextProjectImg, nextProject, manifiesto }: Props) => {
  return (
    <footer className={`z-1 border-t border-neutral-200 footer overflow-y-scroll bg-custom-background`} >
      <div className="pb-20 md:pb-0 mt-32 flex flex-col lg:flex-row items-center justify-content place-content-evenly gap-y-12">
        <div className='group'>
          <div className='relative'>
            <Link as={`/`} href={`/`} aria-label='studiotubarca homepage'>

              <Image
                src='/assets/blog/footer/home-foto.gif'
                alt='studiotubarca Home'
                width={200}
                height={200}
                className='group-hover:shadow-lg group-hover:opacity-0  transition-shadow duration-200' />


              <Image
                src='/assets/blog/footer/home-gif.gif'
                alt='studiotubarca Home'
                width={200}
                height={200}
                className='shadow-lg opacity-0 group-hover:opacity-90  absolute h-full w-full flex items-center justify-center -bottom-0 ' />

            </Link>
          </div>
        </div>

        <Link as={`/contact`} href={`/contact/`} aria-label='studiotubarca contact'>
          <Image
            src='/assets/blog/footer/contact-quiero.png'
            alt='studiotubarca Contact Us'
            className='hover:shadow-lg transition-shadow duration-200'
            width={250}
            height={250}
          />
        </Link>

        <Link as={`/manifiesto`} href={`/manifiesto`} aria-label='studiotubarca manifiesto'>
          <Image
            src='/assets/blog/footer/flor-manifiesto.png'
            alt='studiotubarca Manifiesto'
            className='hover:shadow-lg transition-shadow duration-200'
            width={250}
            height={250}
          />
        </Link>

        <Link as={`/projects/${nextProject}`} href={`/projects/${nextProject}`} aria-label='studiotubarca contact'>
          <Image
            src={nextProjectImg}
            alt='studiotubarca next project image'
            width={200}
            height={200}
            className='hover:shadow-lg transition-shadow duration-200' />
        </Link>

      </div>

    </footer>
  )
}

export default Footer
