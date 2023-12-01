import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer" >

      <div className="py-28 flex flex-col lg:flex-row items-center justify-content place-content-evenly">

        <Link as={`/`} href={`/`} aria-label='studiotubarca homepage'>
          <p>Home</p>
        </Link>

        <Link as={`/`} href={`/`} aria-label='studiotubarca contact'>
          <p>Contact</p>
        </Link>

        <Link as={`/`} href={`/`} aria-label='studiotubarca contact'>
          <p>Manifiesto</p>
        </Link>

        <Link as={`/`} href={`/`} aria-label='studiotubarca contact'>
          <p>Other Proyecto</p>
        </Link>

      </div>

    </footer>
  )
}

export default Footer
