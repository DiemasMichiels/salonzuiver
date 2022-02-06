import { PRISMIC_TYPES } from '@utils/prismic/routes'
import { Client } from '@utils/prismic/client'
import Prismic from '@prismicio/client'
import * as styled from '@components/general/styled'

import type { Document } from '@prismicio/client/types/documents'
import type { GetStaticProps, NextPage } from 'next'

type Props = {
  doc: Document<any>
  navigation: Document<any>
}

const DynamicPage: NextPage<Props> = ({ doc }) => {
  return <styled.Container>{doc.data.pageTitle}</styled.Container>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  const doc = await Client().getByUID(PRISMIC_TYPES.DYNAMIC_PAGE, uid, {})
  const navigation = await Client().getSingle('navigation', {})

  return {
    props: {
      doc,
      navigation,
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
