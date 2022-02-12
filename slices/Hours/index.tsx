import RichText from '@components/prismic/RichText'
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
    <RichText render={slice.primary.title} />
    <styled.Table>
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
    </styled.Table>
  </styled.HoursSection>
)

export default Hours
