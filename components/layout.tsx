
import Image from "next/image";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className='bg'>
        <Image
          src='/assets/blog/texture/bg-texture.jpg'
          alt='fondo'
          layout='fill'
          objectFit="cover"
        />

      </div>
      <main>{children}</main>

    </>
  )
}

export default Layout
