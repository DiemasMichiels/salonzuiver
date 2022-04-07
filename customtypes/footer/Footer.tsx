import { PrismicRichText } from '@prismicio/react'
import Link from '@components/general/Link/Link'
import * as styled from './styled'
import type { PrismicDocumentWithUID } from '@prismicio/types'
import type { FooterData } from './types'

type Props = {
  footer: PrismicDocumentWithUID<FooterData>
}

const Footer = ({ footer }: Props) => {
  return (
    <styled.Footer>
      <PrismicRichText
        field={footer?.data.text}
        components={(type, node, content) => {
          return type === 'span' && content?.includes('{{year}}') ? (
            <>
              {content.replace('{{year}}', new Date().getFullYear().toString())}
            </>
          ) : undefined
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
