import RichText from '@components/prismic/RichText'
import * as styled from './styled'
import type { Document } from '@prismicio/client/types/documents'
import type { FooterData } from './types'

type Props = {
  footer: Document<FooterData>
  isHome?: boolean
}

const Footer = ({ footer, isHome = false }: Props) => {
  return (
    <styled.Footer isHome={isHome}>
      <p>Schoonheidssalon Zuiver © {new Date().getFullYear()}</p>
      <RichText render={footer?.data.text} />
    </styled.Footer>
  )
}

export default Footer
