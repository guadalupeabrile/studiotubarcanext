import { AppProps } from 'next/app'
import '../styles/index.css'
import Meta from '../components/meta'

<link rel="icon" href="/favicon.ico" sizes="any" />

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>)
}
