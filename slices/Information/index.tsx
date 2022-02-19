import RichText from '@components/prismic/RichText'
import type { Slice, RichTextField, ImageField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type InformationSlice = Slice<
  PRISMIC_SLICES.INFORMATION,
  {
    title: RichTextField
  },
  {
    subtitle: RichTextField
    description: RichTextField
    image: ImageField
    imagePosition: 'right' | 'left'
  }
>

type Props = {
  slice: InformationSlice
}

const Information = ({ slice }: Props) => (
  <section>
    <RichText render={slice.primary.title} />
  </section>
)

export default Information
