import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './styles'

const NavbarLinksPure = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/movies">Movie-Genre Predictor</Link>
    <Link to="/recipe-search">Make ¡t Fresh!</Link>
    <Link to="/#about">About</Link>
    <Link to="/#projects">Projects</Link>
    <Link to="/#contact">Contact</Link>
  </Wrapper>
)

export default NavbarLinksPure
