import styled from 'styled-components'

export const PriceTime = styled.div`
  display: flex;
  align-items: center;
`

export const Price = styled.span`
  font-weight: 400;
  letter-spacing: 0.01em;
`

export const Time = styled.span`
  align-self: flex-start;
  font-size: 1.6rem;
  line-height: 1.5em;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.green36};
`
