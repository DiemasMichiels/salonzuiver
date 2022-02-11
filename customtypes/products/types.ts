import type { ProductSlice } from '@slices/Product'
import type { RichTextField } from '@prismicio/types'

export type ProductsData = {
  groupTitle: RichTextField
  notice: RichTextField
  slices: [ProductSlice]
}
