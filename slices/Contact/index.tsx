import RichText from '@components/prismic/RichText'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  Slice,
  RichTextField,
  SelectField,
  KeyTextField,
} from '@prismicio/types'

export type ContactSlice = Slice<
  PRISMIC_SLICES.CONTACT,
  {
    title: RichTextField
  },
  {
    icon: SelectField<'mail' | 'phone' | 'whatsapp'>
    text: KeyTextField
  }
>

type Props = {
  slice: ContactSlice
}

const Contact = ({ slice }: Props) => (
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

export default Contact
