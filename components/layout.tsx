
import Intro from './intro'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className='bg-custom-background'>
        < div className="">
          <main>{children}</main>
        </div >
      </div>

    </>
  )
}

export default Layout
