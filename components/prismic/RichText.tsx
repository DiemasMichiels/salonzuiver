import { CustomLink } from '@utils/prismic/routes'
import { RichText as PrismicRichText } from 'prismic-reactjs'

import type { RichTextBlock } from 'prismic-reactjs'
import type { RichTextField } from '@prismicio/types'

type Props = {
  render: RichTextField
}

const RichText = ({ render }: Props) => (
  <PrismicRichText
    // Make typings prismic-reactjs and @prismicio/types compatible
    render={render as unknown as RichTextBlock[]}
    serializeHyperlink={CustomLink}
  />
)

export default RichText
