import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Section = styled.section`
  ${ContainerStyle}

  h2 {
    padding: 40px 0 0 0;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
`
