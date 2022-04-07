import { PrismicRichText } from '@prismicio/react'
import FancyImage from '@components/fancyImage/FancyImage'
import { getActiveYears } from '@utils/replacers'
import * as styled from './styled'
import type { Slice, ImageField, RichTextField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type InformationSlice = Slice<
  PRISMIC_SLICES.INFORMATION,
  {
    title: RichTextField
  },
  {
    subtitle: RichTextField
    description: RichTextField
    image: ImageField
    imagePosition: 'right' | 'left'
  }
>

type Props = {
  slice: InformationSlice
}

const Information = ({ slice }: Props) => (
  <styled.Section id='cta'>
    <PrismicRichText field={slice.primary.title} />
    {slice.items.map((item, i) => (
      <styled.InfoBlock key={i} imagePosition={item.imagePosition}>
        <styled.Content>
          <PrismicRichText field={item.subtitle} />
          <PrismicRichText
            field={item.description}
            components={(type, node, content) => {
              if (type === 'span' && content) {
                return <p>{getActiveYears(content)}</p>
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
