import Link from "next/link"
import Image from "next/image"

const HeroPost = () => {
  return (
    <section className='min-h-screen h-auto w-full z-10' id='hero-video'>
      <div className="">
        <div className="">
          <video autoPlay loop muted playsInline className="absolute w-full h-screen object-cover">
            <source
              src="assets/blog/videos/video-photos-studiotubarca.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute">
            <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-16 text-center text-white">
              Hola
            </div>
          </div>
        </div>
        <div className="absolute h-screen z-10 bg-custom-background w-full flex flex-col items-center" id="hero-post">
          <div className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight text-center pt-10 md:pt-20'>
            <h1 className="mt-5">
              <Link href="/" className="hover:underline font-mono">
                studiotubarca
              </Link>
            </h1>
          </div>

          <Link as={`/contact`} href={`/contact`} aria-label='studiotubarca manifiesto'>
            <Image
              src='/assets/blog/footer/flor-manifiesto.png'
              alt='studiotubarca Manifiesto'
              className="pt-20"
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
