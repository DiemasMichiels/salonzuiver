import RichText from '@components/prismic/RichText'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type { Slice, RichTextField } from '@prismicio/types'

export type NoticeSlice = Slice<
  PRISMIC_SLICES.NOTICE,
  {
    text: RichTextField
  }
>

type Props = {
  slice: NoticeSlice
}

const Notice = ({ slice }: Props) => (
  <section>
    <span className='title'>
      {slice.primary.text ? (
        <RichText render={slice.primary.text} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
  </section>
)

export default Notice
