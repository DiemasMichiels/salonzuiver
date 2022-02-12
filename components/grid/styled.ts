import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 120px;
  margin-top: 40px;

  ${ContainerStyle}
`
