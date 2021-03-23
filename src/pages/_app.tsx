import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../assets/styles/styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>The Day I Become A God</title>
        <meta
          name="description"
          content="This site that aims to give birth to our gods by randomly coloring the canvas."
        ></meta>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
