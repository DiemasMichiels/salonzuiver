import type { NextPage } from 'next'
import * as styled from '../components/general/styled'
import Logo from '../assets/logo.svg'
import VisuallyHidden from '../components/general/VisuallyHidden/VisuallyHidden'

const Home: NextPage = () => {
  return (
    <styled.Container>
      <styled.Logo>
        <Logo />
        <VisuallyHidden>Schoonheidssalon Zuiver</VisuallyHidden>
      </styled.Logo>
      <styled.StartDate>22 . 02 . 2022</styled.StartDate>
      <styled.Contact>
        <span>Neem contact op</span>
        <hr />
        <a href='mailto:info@salonzuiver.be'>info@salonzuiver.be</a>
      </styled.Contact>
    </styled.Container>
  )
}

export default Home
