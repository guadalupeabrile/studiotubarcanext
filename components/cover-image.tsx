import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


type Props = {
  title: string
  src: string
  slug?: string
  nameI: string
  nameVideo: string
}

const CoverImage = ({ title, src, slug, nameVideo }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className=" w-full object-cover h-auto group-hover:shadow-lg group-hover:opacity-0  transition-shadow duration-200"
      width={1300}
      height={630}
    />
  );

  //Mouseover effect for md and lg screens

  const videoId = title;

  useEffect(() => {
    const anim = document.getElementById(videoId) as HTMLVideoElement;

    anim.addEventListener("mouseover", function () {
      anim.play();
    });

    anim.addEventListener("mouseout", function () {
      anim.pause();
      anim.currentTime = 0; // Reiniciar el video al principio al salir del área del video
    });
  }, [])

  //InView autoPlay for mobile 



  const { ref: myRef, inView } = useInView();

  // useEffect(() => {

  //   const animMob = document.getElementById(videoMobId) as HTMLVideoElement;

  //   inView ? animMob.play() : ""

  // }, [])

  return (
    <>
      <div className="sm:mx-0">

        <div className='group'>
          <div className='relative'>
            <Link as={`/projects/${slug}`} href={`/projects/${slug}`} aria-label={title}>
              {image}
              <div className='hidden md:block'>
                <video id={title} preload='none' muted loop className='shadow md:opacity-0 md:group-hover:opacity-90  absolute h-full w-full flex items-center justify-center -bottom-0 '>
                  <source src={nameVideo} type="video/mp4" />
                </video>
              </div>

              <div ref={myRef} className={`${inView ? 'block' : 'hideen'}   md:hidden`}>

                <video id={title} autoPlay muted loop playsInline className='shadow  absolute h-full w-full flex items-center justify-center -bottom-0 '>
                  <source src={nameVideo} type="video/mp4" />
                </video>

              </div>
            </Link>
          </div>
        </div>


      </div>

    </>
  )
}


export default CoverImage
