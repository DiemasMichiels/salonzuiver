import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.TermsSlice }

const Terms = ({ slice }: Props) => (
  <styled.Section id='cta' data-aos='fade-up'>
    <PrismicRichText field={slice.primary.title} />
    {slice.items.map((item, i) => (
      <div key={i}>
        <PrismicRichText field={item.subtitle} />
        <PrismicRichText field={item.description} />
      </div>
    ))}
  </styled.Section>
)

export default Terms
