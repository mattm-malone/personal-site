import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinksPure from '../NavbarLinksPure'
import { Wrapper } from './styles'

const NavbarPure = () => (
  <Wrapper as={Container}>
    <Link to="/">Matt Malone</Link>
    <NavbarLinksPure desktop />
  </Wrapper>
)

export default NavbarPure
