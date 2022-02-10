import type { ProductSlice } from '@slices/Product'
import type { RichTextField } from '@prismicio/types'

export type NavigationData = {
  groupTitle: RichTextField
  slices: [ProductSlice]
}
