import { useRouter } from 'next/router'
import { useEffect } from 'react'
import createClient from '@utils/prismic/client'
import { getStaticsForSlices } from '@utils/api/statics'
import Slices from '@components/slices/Slices'
import Page from '@components/page/Page'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const DynamicPage = ({
  doc,
  statics,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      {!router.isFallback && (
        <Slices slices={doc.data.slices} statics={statics} />
      )}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  let doc = null
  let navigation = null
  let footer = null
  let statics = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID('dynamic-page', uid, {})
    navigation = await client.getSingle('navigation', {})
    footer = await client.getSingle('footer', {})

    statics = await getStaticsForSlices(client, doc.data.slices)
  } catch (error) {}

  return {
    props: {
      doc,
      navigation,
      footer,
      statics,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  let docs = undefined

  try {
    const client = createClient({})
    docs = await client.getAllByType('dynamic-page')
  } catch (error) {}

  return {
    paths: docs?.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default DynamicPage
