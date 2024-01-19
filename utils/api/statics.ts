import { isFilled, type Client, type SliceZone } from '@prismicio/client'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  DynamicPageDocumentDataSlicesSlice,
  PricesSlice,
  ProductsDocument,
} from '@root/prismicio-types'

export type Statics = {
  products: { [key: string]: ProductsDocument } | null | undefined
}

const getPrices = async (
  client: Client,
  slices: SliceZone<DynamicPageDocumentDataSlicesSlice>,
) => {
  const priceSlices = slices.filter(
    (slice) => slice.slice_type === PRISMIC_SLICES.PRICES,
  ) as SliceZone<PricesSlice>

  if (priceSlices.length) {
    const productIds = priceSlices.reduce<string[]>((acc, slice) => {
      const ids = slice.items.map((productGroup) =>
        isFilled.contentRelationship(productGroup.products)
          ? productGroup.products.id
          : null,
      )
      return [...acc, ...ids].filter((id) => id) as string[]
    }, [])

    const productResult = await client.getByIDs<ProductsDocument>(productIds, {
      pageSize: 100,
    })

    if (productResult.results.length) {
      return productResult.results.reduce((acc, item) => {
        acc[item.id] = item
        return { ...acc }
      }, {} as { [key: string]: ProductsDocument })
    }

    return null
  }
}

export const getStaticsForSlices = async (
  client: Client,
  slices: SliceZone<DynamicPageDocumentDataSlicesSlice>,
): Promise<Statics> => {
  const products = await getPrices(client, slices)

  return { products: products || null }
}
