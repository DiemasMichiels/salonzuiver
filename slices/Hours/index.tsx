import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

export type HoursSlice = SliceComponentProps<Content.HoursSlice>

const Hours = ({ slice }: HoursSlice) => (
  <styled.HoursSection data-aos='fade-up'>
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
