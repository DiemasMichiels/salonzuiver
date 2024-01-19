import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import MailIcon from '@assets/icons/mail.svg'
import PhoneIcon from '@assets/icons/phone.svg'
import WhatsappIcon from '@assets/icons/whatsapp.svg'
import * as styled from './styled'
import type { SelectField, KeyTextField } from '@prismicio/types'
import type { Content } from '@prismicio/client'

export type ContactSlice = SliceComponentProps<Content.ContactSlice>

const getIconAndHref = (item: {
  icon: SelectField<'mail' | 'phone' | 'whatsapp'>
  text: KeyTextField
}) => {
  let IconComp: JSX.Element | null = null
  let href: string | null = null

  const textWithoutSpaces = (item.text ?? '').replace(/\s/g, '')

  switch (item.icon) {
    case 'mail':
      IconComp = <MailIcon />
      href = `mailto:${textWithoutSpaces}`
      break
    case 'phone':
      IconComp = <PhoneIcon />
      href = `tel:${textWithoutSpaces}`
      break
    case 'whatsapp':
      IconComp = <WhatsappIcon />
      href = `https://wa.me/${textWithoutSpaces}`
      break
  }

  return { IconComp, href }
}

const Contact = ({ slice }: ContactSlice) => (
  <styled.ContactSection data-aos='fade-up'>
    <PrismicRichText field={slice.primary.title} />
    <styled.Address>
      {slice.items.map((item) => {
        const { IconComp, href } = getIconAndHref(item)

        return href && !!IconComp ? (
          <div key={`${item.text}-${item.icon}`}>
            {IconComp}
            <a href={href}>{item.text}</a>
          </div>
        ) : null
      })}
    </styled.Address>
  </styled.ContactSection>
)

export default Contact
