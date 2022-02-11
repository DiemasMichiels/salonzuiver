import Client from '@utils/prismic/client'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import type { Document } from '@prismicio/client/types/documents'
import type { PricesSlice } from '@slices/Prices'
import type { ProductsData } from '@customtypes/products/types'
import type SliceTypes from '@slices/sliceTypes'

export type Statics = {
  products?: Document<ProductsData>[]
}

const getPrices = async (slices: SliceTypes[]) => {
  const priceSlices = slices.filter(
    (slice) => slice.slice_type === PRISMIC_SLICES.PRICES,
  ) as PricesSlice[]

  if (priceSlices.length) {
    const productIds = priceSlices.reduce<string[]>((acc, slice) => {
      const ids = slice.items.map((productGroup) => productGroup.products.id)
      return [...acc, ...ids]
    }, [])

    const productResult = await Client().getByIDs<ProductsData>(productIds, {
      pageSize: 100,
    })

    return productResult.results.length ? productResult.results : undefined
  }
}

export const getStaticsForSlices = async (
  slices: SliceTypes[],
): Promise<Statics> => {
  const products = await getPrices(slices)

  return { products }
}
