import type { NextPage } from 'next'
import * as styled from '../components/general/styled'
import Logo from '../assets/logo.svg'
import VisuallyHidden from '../components/general/VisuallyHidden/VisuallyHidden'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <styled.Container>
      <styled.Nav>
        <ul>
          <li>
            <Link href='/prices'>Prijslijst</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </styled.Nav>
      <styled.Logo>
        <Logo />
        <VisuallyHidden>Schoonheidssalon Zuiver</VisuallyHidden>
      </styled.Logo>
      <styled.StartDate dateTime='2022-02-22'>22 . 02 . 2022</styled.StartDate>
      <styled.Contact>
        <span>Neem contact op</span>
        <hr />
        <Link href='/contact'>info@salonzuiver.be</Link>
      </styled.Contact>
    </styled.Container>
  )
}

export default Home
