import Head from 'next/head'
import Image from 'next/image'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schoonheidssalon Zuiver</title>
        <meta name='description' content='Schoonheidssalon Zuiver' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald&display=optional'
          rel='stylesheet'
        />
      </Head>
      <h1>Schoonheidssalon Zuiver</h1>
    </>
  )
}

export default Home
