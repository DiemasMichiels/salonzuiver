import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'
import type {
  Slice,
  RichTextField,
  BooleanField,
  KeyTextField,
} from '@prismicio/types'

export type HoursSlice = Slice<
  PRISMIC_SLICES.HOURS,
  {
    title: RichTextField
  },
  {
    day: KeyTextField
    hours: KeyTextField
    closed: BooleanField
  }
>

type Props = {
  slice: HoursSlice
}

const Hours = ({ slice }: Props) => (
  <styled.HoursSection>
    <PrismicRichText field={slice.primary.title} />
    <styled.Table>
      <tbody>
        {slice.items.map((item) => (
          <styled.TableRow key={item.day} closed={item.closed}>
            <th>
              <span>{item.day}</span>
            </th>
            <td>
              <span>{item.hours}</span>
            </td>
          </styled.TableRow>
        ))}
      </tbody>
    </styled.Table>
  </styled.HoursSection>
)

export default Hours
