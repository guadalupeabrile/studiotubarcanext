import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta
        name="studiotubarca"
        content={`Creative. Arquitecture. Carpintry.`}
      />
      <meta property="og:image" content='/favicon/opengraph-image.png' />
    </Head>
  )
}

export default Meta
