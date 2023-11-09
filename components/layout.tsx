
import Intro from './intro'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className='bg-custom-background'>

        <main>{children}</main>

      </div>

    </>
  )
}

export default Layout
