import * as styled from '@components/general/styled'
import Logo from '@assets/logo.svg'
import VisuallyHidden from '@components/general/VisuallyHidden/VisuallyHidden'
import { HOMEPAGE_UID, PRISMIC_TYPES } from '@utils/prismic/routes'
import { Client } from '@utils/prismic/client'
import { Document } from '@prismicio/client/types/documents'

import type { GetStaticProps, NextPage } from 'next'

type Props = {
  doc: Document<any>
  navigation: Document<any>
}

const Home: NextPage<Props> = ({ doc, navigation }) => {
  console.log('◇─◇──◇────◇────◇─乁(ツ)ㄏ─◇────◇─────◇──◇─◇')
  console.log('doc')
  console.log(doc, navigation)
  console.log('◇─◇──◇────◇────◇─乁(ツ)ㄏ─◇────◇─────◇──◇─◇')
  return (
    <styled.Container>
      <styled.Logo>
        <Logo />
        <VisuallyHidden>Schoonheidssalon Zuiver</VisuallyHidden>
      </styled.Logo>
      <styled.StartDate dateTime='2022-02-22'>22 . 02 . 2022</styled.StartDate>
      <styled.Contact>
        <span>Neem contact op</span>
        <hr />
        <a href='mailto:info@salonzuiver.be'>info@salonzuiver.be</a>
      </styled.Contact>
    </styled.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const doc = await Client().getByUID(
    PRISMIC_TYPES.DYNAMIC_PAGE,
    HOMEPAGE_UID,
    {},
  )
  const navigation = await Client().getSingle('navigation', {})

  return {
    props: {
      doc,
      navigation,
    },
    revalidate: 60,
  }
}

export default Home
