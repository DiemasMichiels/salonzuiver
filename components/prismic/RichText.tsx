import { RichText as PrismicRichText, RichTextProps } from 'prismic-reactjs'
import Link from '@components/general/Link/Link'
import type { RichTextBlock } from 'prismic-reactjs'
import type { FilledLinkToDocumentField, RichTextField } from '@prismicio/types'
import type { Elements, HTMLSerializer } from 'prismic-reactjs'
import type { ReactNode } from 'react'

const CustomLink: HTMLSerializer<ReactNode> = (
  type: Elements,
  element: { data: FilledLinkToDocumentField },
  content: string,
  children: ReactNode[],
  index: number | string,
) => (
  <Link key={index} href={element.data}>
    {content}
  </Link>
)

type Props = Omit<RichTextProps, 'render'> & {
  render: RichTextField
}

const RichText = ({ render, ...props }: Props) => (
  <PrismicRichText
    // TODO: Typing check once Slice Machine gets better
    // Make typings prismic-reactjs and @prismicio/types compatible
    // After effect of Slice Machine being still in "beta" faze
    render={render as unknown as RichTextBlock[]}
    serializeHyperlink={CustomLink}
    {...props}
  />
)

export default RichText
