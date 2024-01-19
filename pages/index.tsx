import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HOMEPAGE_UID } from '@utils/prismic/constants'
import createClient from '@utils/prismic/client'
import Slices from '@components/slices/Slices'
import Page from '@components/page/Page'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const Home = ({ doc }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()

  useEffect(() => {
    if (!doc || !doc.id) {
      router.replace('/')
    }
  }, [doc, router])

  if (!doc || !doc.id) {
    return null
  }

  return (
    <Page firstSlice={doc.data.slices[0]}>
      {!router.isFallback && <Slices slices={doc.data.slices} />}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  let doc = null
  let navigation = null
  let footer = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID('dynamic-page', HOMEPAGE_UID, {})
    navigation = await client.getSingle('navigation', {})
    footer = await client.getSingle('footer', {})
  } catch (error) {}

  return {
    props: {
      doc,
      navigation,
      footer,
    },
    revalidate: 60,
  }
}

export default Home
