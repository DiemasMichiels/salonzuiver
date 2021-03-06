import styled from 'styled-components'

export const Notice = styled.div`
  display: flex;
  margin: 8px 0 0 0;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.green48p32};

  svg {
    flex-shrink: 0;

    path {
      fill: ${({ theme }) => theme.colors.green08};
    }
  }

  p {
    margin: 0 0 0 8px;
    font-size: 1.6rem;
    line-height: 1.5em;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.green08};
  }
`
