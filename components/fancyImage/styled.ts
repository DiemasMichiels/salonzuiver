import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 16px 16px 0px 0px ${({ theme }) => theme.colors.brown72};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -24px;
    left: -24px;
    background-image: url('image-pattern.svg');
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    right: -24px;
    bottom: -24px;
    border: 1px solid ${({ theme }) => theme.colors.brown72};
    border-top: 0;
    border-left: 0;
  }
`
