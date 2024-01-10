import { Html, Head, Main, NextScript } from 'next/document'
import Meta from '../components/meta'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='font-pro'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
