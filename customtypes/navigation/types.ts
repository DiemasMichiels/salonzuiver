import type { KeyTextField, LinkField } from '@prismicio/types'

export type NavigationData = {
  menuItems: { title: KeyTextField; link: LinkField }[]
  socialItems: { social: 'instagram' | 'facebook'; link: LinkField }[]
}
