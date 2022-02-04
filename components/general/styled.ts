import styled from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  mix-blend-mode: hard-light;
`

export const Logo = styled.div`
  position: absolute;
  width: 568px;
  max-width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StartDate = styled.time`
  position: absolute;
  bottom: 64px;
  left: 50%;
  text-align: center;
  letter-spacing: 0.04em;
  transform: translateX(-50%);
`

export const Contact = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  hr {
    transform: rotate(90deg);
    display: none;
    width: 32px;
    margin: 40px -12px;
    border: 0.1px solid ${({ theme }) => theme.colors.brand};

    @media (min-width: 768px) {
      display: inline-block;
    }
  }

  span {
    display: block;

    @media (min-width: 768px) {
      display: inline-block;
    }
  }

  @media (min-width: 768px) {
    top: 50%;
    left: 64px;
    transform: rotate(180deg) translateY(50%);
    writing-mode: vertical-lr;
  }
`

export const Nav = styled.nav`
  position: fixed;
  bottom: 60px;
  right: 20px;
  writing-mode: vertical-rl;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 40px;
  }
`
