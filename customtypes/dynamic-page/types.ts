import type { HeroSlice } from '@slices/Hero'
import type { ImageField, KeyTextField } from '@prismicio/types'

type SEOPageData = {
  seoTitle: KeyTextField
  seoDescription: KeyTextField
  seoImage: ImageField
}

export type DynamicPageData = SEOPageData & {
  pageTitle: KeyTextField
  slices: [HeroSlice]
}
