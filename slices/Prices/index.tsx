import { PrismicRichText } from '@prismicio/react'
import { isFilled, type Content } from '@prismicio/client'
import Products from '@customtypes/products/Products'
import * as styled from './styled'
import type { ProductsDocument } from '@root/prismicio-types'

type Props = {
  slice: Content.PricesSlice
  products:
    | {
        [key: string]: ProductsDocument
      }
    | null
    | undefined
}

const Prices = ({ slice, products }: Props) => {
  return (
    <styled.Section>
      <PrismicRichText field={slice.primary.title} />
      <styled.Grid>
        <div>
          {products &&
            slice.items.map(
              (item) =>
                item.position === 'left' &&
                isFilled.contentRelationship(item.products) && (
                  <Products
                    key={item.products.id}
                    doc={products[item.products.id]}
                  />
                ),
            )}
        </div>
        <div>
          {products &&
            slice.items.map(
              (item) =>
                item.position === 'right' &&
                isFilled.contentRelationship(item.products) && (
                  <Products
                    key={item.products.id}
                    doc={products[item.products.id]}
                  />
                ),
            )}
        </div>
      </styled.Grid>
    </styled.Section>
  )
}

export default Prices
