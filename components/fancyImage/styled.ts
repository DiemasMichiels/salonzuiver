import styled from 'styled-components'

export const ImageContainer = styled.div<{ small: boolean }>`
  width: 100%;
  height: 100%;
  box-shadow: ${({ small }) => (small ? '8px 8px' : '16px 16px')} 0px 0px
    ${({ theme }) => theme.colors.brown72};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: ${({ small }) => (small ? '-12px' : '-24px')};
    left: ${({ small }) => (small ? '-12px' : '-24px')};
    background-image: url('image-pattern.svg');
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    right: ${({ small }) => (small ? '-16px' : '-24px')};
    bottom: ${({ small }) => (small ? '-16px' : '-24px')};
    border: 1px solid ${({ theme }) => theme.colors.brown72};
    border-top: 0;
    border-left: 0;
  }
`
