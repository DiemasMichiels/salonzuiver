import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schoonheidssalon Zuiver - Contact</title>
      </Head>
      <Link href='/prices'>
        <h1>Contact</h1>
      </Link>
    </>
  )
}

export default Contact
