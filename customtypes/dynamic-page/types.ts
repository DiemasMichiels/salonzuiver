import type { AddressSlice } from '@slices/Address'
import type { ContactSlice } from '@slices/Contact'
import type { HoursSlice } from '@slices/Hours'
import type { NoticeSlice } from '@slices/Notice'
import type { PricesSlice } from '@slices/Prices'
import type { ImageField, KeyTextField } from '@prismicio/types'
import type { HeroSlice } from '@slices/Hero'

type SEOPageData = {
  seoTitle: KeyTextField
  seoDescription: KeyTextField
  seoImage: ImageField
}

export type DynamicPageData = SEOPageData & {
  pageTitle: KeyTextField
  slices: [
    | HeroSlice
    | AddressSlice
    | ContactSlice
    | HoursSlice
    | NoticeSlice
    | PricesSlice,
  ]
}
