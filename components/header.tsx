import Link from 'next/link'

const Header = () => {
  return (
    <div className='text-2xl md:text-4xl  tracking-tight md:tracking-tighter leading-tight text-center pt-10 md:pt-20'>
      <h1 className='tracking-wide font-bold'>Contactanos!</h1>
      <h2 className="mt-5">
        <Link href="/" className="hover:underline font-mono">
          studiotubarca
        </Link>
      </h2>
    </div>
  )
}

export default Header
