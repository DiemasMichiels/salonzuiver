import styled from 'styled-components'
import { ContainerStyle } from '@components/general/styled'

export const NoticeSection = styled.section`
  flex: 1;
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: 40px;

  ${ContainerStyle}

  div {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    padding: 16px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.brown72};

    svg {
      flex-shrink: 0;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.5em;
      color: ${({ theme }) => theme.colors.brown32};
    }
  }
`
