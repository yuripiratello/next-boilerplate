import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project startr to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
