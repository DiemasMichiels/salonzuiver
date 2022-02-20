import RichText from '@components/prismic/RichText'
import Link from '@components/general/Link/Link'
import * as styled from './styled'
import type { Document } from '@prismicio/client/types/documents'
import type { FooterData } from './types'
import type { Elements } from 'prismic-reactjs'

type Props = {
  footer: Document<FooterData>
}

const Footer = ({ footer }: Props) => {
  return (
    <styled.Footer>
      <RichText
        render={footer?.data.text}
        htmlSerializer={(type: Elements, _, content: string) => {
          return (
            type === 'span' &&
            content &&
            content.replace('{{year}}', new Date().getFullYear().toString())
          )
        }}
      />
      <p>
        Made by
        <Link href='https://diemas.dev' target='_blank'>
          Diemas
        </Link>
      </p>
    </styled.Footer>
  )
}

export default Footer
