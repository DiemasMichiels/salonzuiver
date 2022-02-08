import Error from 'next/error'
import type { NextPage } from 'next'

const NotFound: NextPage = () => {
  return <Error statusCode={404} />
}

export default NotFound
