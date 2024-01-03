import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <meta
        name="studiotubarca"
        content={`Creative. Arquitecture. Carpintry.`}
      />
      <meta property="og:image" />
    </Head>
  )
}

export default Meta
