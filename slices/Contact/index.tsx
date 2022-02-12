import MailIcon from '@assets/icons/mail.svg'
import PhoneIcon from '@assets/icons/phone.svg'
import WhatsappIcon from '@assets/icons/whatsapp.svg'
import RichText from '@components/prismic/RichText'
import * as styled from './styled'
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

const getIcon = (icon: 'mail' | 'phone' | 'whatsapp') => {
  switch (icon) {
    case 'mail':
      return <MailIcon />
    case 'phone':
      return <PhoneIcon />
    case 'whatsapp':
      return <WhatsappIcon />

    default:
      return null
  }
}

const Contact = ({ slice }: Props) => (
  <styled.ContactSection>
    <RichText render={slice.primary.title} />
    <styled.Address>
      {slice.items.map((item) =>
        item.text && item.icon ? (
          <div key={item.text}>
            {getIcon(item.icon)}
            <a
              href={
                ['phone', 'whatsapp'].includes(item.icon)
                  ? `tel:${item.text.replace(/\s/g, '')}`
                  : item.text
              }
            >
              {item.text}
            </a>
          </div>
        ) : null,
      )}
    </styled.Address>
  </styled.ContactSection>
)

export default Contact
