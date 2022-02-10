import RichText from '@components/prismic/RichText'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  Slice,
  RichTextField,
  BooleanField,
  KeyTextField,
} from '@prismicio/types'

export type HoursSlice = Slice<
  PRISMIC_SLICES.HOURS,
  {
    title: RichTextField
  },
  {
    day: KeyTextField
    hours: KeyTextField
    closed: BooleanField
  }
>

type Props = {
  slice: HoursSlice
}

const Hours = ({ slice }: Props) => (
  <section>
    <span className='title'>
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
  </section>
)

export default Hours
