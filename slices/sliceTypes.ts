import type { AddressSlice } from './Address'
import type { ContactSlice } from './Contact'
import type { HeroSlice } from './Hero'
import type { HoursSlice } from './Hours'
import type { NoticeSlice } from './Notice'
import type { PricesSlice } from './Prices'
import type { ProductSlice } from './Product'

type SliceTypes =
  | HeroSlice
  | AddressSlice
  | ContactSlice
  | HoursSlice
  | NoticeSlice
  | PricesSlice
  | ProductSlice

export default SliceTypes
