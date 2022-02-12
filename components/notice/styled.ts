import styled from 'styled-components'

export const Notice = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 0 0;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.green48p32};

  p {
    margin: 0 0 0 8px;
    font-size: 1.6rem;
    line-height: 1.5em;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.green20};
  }
`
