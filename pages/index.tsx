import { HOMEPAGE_UID, PRISMIC_TYPES } from '@utils/prismic/constants'
import { Client } from '@utils/prismic/client'
import Slices from '@components/slices/Slices'
import type { NavigationData } from '@customtypes/navigation/types'
import type { Document } from '@prismicio/client/types/documents'
import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageData } from '@customtypes/dynamic-page/types'
import type { FooterData } from '@customtypes/footer/types'

type Props = {
  doc: Document<DynamicPageData>
}

const Home: NextPage<Props> = ({ doc }) => {
  return <Slices slices={doc.data.slices} />
}

export const getStaticProps: GetStaticProps = async () => {
  const doc = await Client().getByUID<DynamicPageData>(
    PRISMIC_TYPES.DYNAMIC_PAGE,
    HOMEPAGE_UID,
    {},
  )
  const navigation = await Client().getSingle<NavigationData>(
    PRISMIC_TYPES.NAVIGATION,
    {},
  )
  const footer = await Client().getSingle<FooterData>(PRISMIC_TYPES.FOOTER, {})

  return {
    props: {
      doc,
      navigation,
      footer,
    },
    revalidate: 600,
  }
}

export default Home
