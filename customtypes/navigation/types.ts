import type {
  GroupField,
  ImageField,
  KeyTextField,
  LinkField,
} from '@prismicio/types'

export type NavigationData = {
  logo: ImageField
  menuText: KeyTextField
  menuItems: GroupField<{ title: KeyTextField; link: LinkField }>
  socialItems: GroupField<{ social: 'instagram' | 'facebook'; link: LinkField }>
  salonizedCompany: KeyTextField
  salonizedButtonTitle: KeyTextField
  salonizedVoucherButtonTitle: KeyTextField
}
