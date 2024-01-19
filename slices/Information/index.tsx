import { PrismicRichText } from '@prismicio/react'
import FancyImage from '@components/fancyImage/FancyImage'
import { getActiveYears } from '@utils/replacers'
import * as styled from './styled'
import type { Content } from '@prismicio/client'

type Props = { slice: Content.InformationSlice }

const Information = ({ slice }: Props) => (
  <styled.Section id='cta'>
    <PrismicRichText field={slice.primary.title} />
    {slice.items.map((item, i) => (
      <styled.InfoBlock
        key={i}
        imagePosition={item.imagePosition}
        data-aos='fade-up'
      >
        <styled.Content>
          <PrismicRichText field={item.subtitle} />
          <PrismicRichText
            field={item.description}
            components={(type, node, content) => {
              if (type === 'span' && content) {
                return <>{getActiveYears(content)}</>
              }

              return undefined
            }}
          />
        </styled.Content>
        <styled.ImageContainer>
          <FancyImage small image={item.image} />
        </styled.ImageContainer>
      </styled.InfoBlock>
    ))}
  </styled.Section>
)

export default Information
