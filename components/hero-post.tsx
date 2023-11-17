
const HeroPost = () => {
  return (
    <section className='min-h-screen w-full z-10' id='hero-video'>
      <div className="sticky">
        <div className="">
          <video autoPlay loop muted className="absolute w-full h-screen object-cover">
            <source
              src="assets/blog/videos/hero-video-studiotubarca.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute">
            <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-16 text-center text-white">
              Hola
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroPost
