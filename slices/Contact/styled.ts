import styled from 'styled-components'

export const ContactSection = styled.section`
  h2 {
    margin-bottom: 16px;
  }
`

export const Address = styled.address`
  width: fit-content;

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.green20};
  }

  div + div {
    margin-top: 32px;

    &::before {
      content: '';
      position: absolute;
      width: 24px;
      height: 1px;
      top: -16px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.colors.brown72};
    }
  }
`
