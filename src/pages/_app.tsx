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
          content="ランダムにキャンバスを彩ることで、我々の神様を産み出すことを目的としたサイト"
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
