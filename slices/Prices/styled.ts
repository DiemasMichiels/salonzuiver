import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  h2 {
    padding: 40px 0 0 0;
  }

  margin-bottom: 52px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  @media (min-width: 992px) {
    gap: 120px;
  }
`
