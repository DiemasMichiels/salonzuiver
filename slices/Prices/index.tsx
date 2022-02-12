import RichText from '@components/prismic/RichText'
import Products from '@customtypes/products/Products'
import * as styled from './styled'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  Slice,
  RichTextField,
  SelectField,
  FilledLinkToDocumentField,
} from '@prismicio/types'
import type { Statics } from '@utils/api/statics'

export type PricesSlice = Slice<
  PRISMIC_SLICES.PRICES,
  {
    title: RichTextField
  },
  {
    products: FilledLinkToDocumentField
    position: SelectField<'left' | 'right'>
  }
>

type Props = {
  slice: PricesSlice
  products: Statics['products']
}

const Prices = ({ slice, products }: Props) => {
  return (
    <styled.Section>
      <RichText render={slice.primary.title} />
      <styled.Grid>
        <div>
          {products &&
            slice.items.map(
              (item) =>
                item.position === 'left' && (
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
                item.position === 'right' && (
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
