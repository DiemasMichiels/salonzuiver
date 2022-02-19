import RichText from '@components/prismic/RichText'
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
  <section>
    <RichText render={slice.primary.title} />
  </section>
)

export default Terms
