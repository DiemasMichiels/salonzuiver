import styled from 'styled-components'

export const Product = styled.div`
  margin-top: 16px;

  p {
    margin: 4px 0 8px 0;
    font-size: 1.6rem;
    line-height: 1.5em;
    color: ${({ theme }) => theme.colors.brown32};
  }
`

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;

  h4 {
    flex: 1;
    white-space: nowrap;
    margin-right: 4px;
  }
`

export const PriceList = styled.div`
  display: flex;

  div + div {
    position: relative;
    margin-left: 24px;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 1px;
      top: 50%;
      left: -16px;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.colors.brown72};
    }
  }
`
