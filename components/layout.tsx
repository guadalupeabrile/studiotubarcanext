

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='bg-custom-background bg'>
      </div>
      <main>{children}</main>

    </>
  )
}

export default Layout
