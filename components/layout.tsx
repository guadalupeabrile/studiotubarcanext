
import Image from "next/image";
import background from '../public/assets/blog/texture/bg-texture-min.webp';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <main className="bg-custom-background bg">{children}</main>
    </>
  )
}

export default Layout
