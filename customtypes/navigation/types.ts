import type { ImageField, KeyTextField, LinkField } from '@prismicio/types'

export type NavigationData = {
  logo: ImageField
  menuText: KeyTextField
  menuItems: { title: KeyTextField; link: LinkField }[]
  socialItems: { social: 'instagram' | 'facebook'; link: LinkField }[]
}
