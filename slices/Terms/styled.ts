import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  @media (min-width: 1200px) {
    max-width: 960px;
  }

  h2 {
    padding: 40px 0 40px 0;
  }

  margin-bottom: 52px;

  div {
    margin-bottom: 40px;

    p {
      padding-top: 16px;
    }
  }
`
