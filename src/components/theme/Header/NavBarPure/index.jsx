import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import { Wrapper } from './styles'

const NavbarPure = () => (
	<Wrapper as={Container}>
		<Link to="/">Matt Malone</Link>
	</Wrapper>
)

export default NavbarPure
