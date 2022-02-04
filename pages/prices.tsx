import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Prices: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schoonheidssalon Zuiver - Prices</title>
      </Head>
      <Link href='/'>
        <h1>Prices</h1>
      </Link>
    </>
  )
}

export default Prices
