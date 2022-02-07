import { PRISMIC_TYPES } from '@utils/prismic/constants'
import { Client } from '@utils/prismic/client'
import Prismic from '@prismicio/client'

import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { Document } from '@prismicio/client/types/documents'
import type { GetStaticProps, NextPage } from 'next'

type Props = {
  doc: Document<DynamicPageData>
}

const DynamicPage: NextPage<Props> = ({ doc }) => {
  return <div>{doc.data.pageTitle}</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  const doc = await Client().getByUID<DynamicPageData>(
    PRISMIC_TYPES.DYNAMIC_PAGE,
    uid,
    {},
  )

  return {
    props: {
      doc,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at('document.type', PRISMIC_TYPES.DYNAMIC_PAGE),
    { lang: '*' },
  )

  return {
    paths: docs.results.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default DynamicPage
