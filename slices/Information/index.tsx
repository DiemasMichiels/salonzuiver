import RichText from '@components/prismic/RichText'
import FancyImage from '@components/fancyImage/FancyImage'
import * as styled from './styled'
import type { Slice, RichTextField, ImageField } from '@prismicio/types'
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
    <RichText render={slice.primary.title} />
    {slice.items.map((item, i) => (
      <styled.InfoBlock key={i} imagePosition={item.imagePosition}>
        <styled.Content>
          <RichText render={item.subtitle} />
          <RichText render={item.description} />
        </styled.Content>
        <styled.ImageContainer>
          <FancyImage small image={item.image} />
        </styled.ImageContainer>
      </styled.InfoBlock>
    ))}
  </styled.Section>
)

export default Information
