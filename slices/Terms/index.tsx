import RichText from '@components/prismic/RichText'
import * as styled from './styled'
import type { Slice, RichTextField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type TermsSlice = Slice<
  PRISMIC_SLICES.TERMS,
  {
    title: RichTextField
  },
  {
    subtitle: RichTextField
    description: RichTextField
  }
>

type Props = {
  slice: TermsSlice
}

const Terms = ({ slice }: Props) => (
  <styled.Section id='cta'>
    <RichText render={slice.primary.title} />
    {slice.items.map((item, i) => (
      <div key={i}>
        <RichText render={item.subtitle} />
        <RichText render={item.description} />
      </div>
    ))}
  </styled.Section>
)

export default Terms
