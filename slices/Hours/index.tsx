import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.HoursSlice }

const Hours = ({ slice }: Props) => (
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
