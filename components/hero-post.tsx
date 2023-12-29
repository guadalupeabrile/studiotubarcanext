import Link from "next/link"
import Image from "next/image"

import studio from '../public/assets/blog/manifiesto/studiotubarca.png';
import contact from '../public/assets/blog/footer/contact.png'

const HeroPost = () => {
  return (
    <section className='min-h-screen h-auto w-full z-10' id='hero-video'>
      <div className="">
        <div className="">
          <video autoPlay loop muted playsInline controls className="absolute w-full h-screen object-cover">
            <source
              src="assets/blog/videos/video-photos-studiotubarca.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute h-screen z-10 bg-custom-background w-full flex items-center place-content-evenly" id="hero-post">
          <Link as={`/`} href={`/`} aria-label='studiotubarca manifiesto' className="pt-20">
            <Image
              src='/assets/blog/footer/flor-manifiesto.png'
              alt='studiotubarca Manifiesto'
              className='hover:shadow-lg transition-shadow duration-200'
              width={250}
              height={250}
            />
          </Link>

          <Link as={`/manifiesto`} href={`/manifiesto`} aria-label='studiotubarca manifiesto' className="pt-20">
            <Image
              src={studio}
              alt='studiotubarca logo'
              className='hover:shadow-lg transition-shadow duration-200'
              width={450}
              height={250}
            />

          </Link>

          <Link as={`/contact`} href={`/contact`} aria-label='studiotubarca contact' className="pt-20">
            <Image
              src={contact}
              alt='studiotubarca Manifiesto'
              className='hover:shadow-lg transition-shadow duration-200'
              width={250}
              height={250}
            />
          </Link>

        </div>
      </div>
    </section>
  )
}

export default HeroPost
