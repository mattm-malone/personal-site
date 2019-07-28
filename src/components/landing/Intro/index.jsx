import React from 'react'
import { Header } from 'Theme'
import { Box } from 'rebass'
import { Container, SocialLink } from 'Common'
import code from 'Static/illustrations/code-review.svg'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Wrapper,
  IntroWrapper,
  Details,
  Thumbnail,
  Links,
  IconLink,
} from './styles'
import { SocialMediaLinks } from '../../theme/Footer/social'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>&lt;Intro&gt;</h1>
        <h4>Hi, I'm Matt Malone.</h4>
        <h4>I'm a software engineer.</h4>
        <h1>&lt;/Intro&gt;</h1>
        <Links>
          {SocialMediaLinks.map(({ name, link, icon }) => (
            <Box mx={0} fontSize={7}>
              <SocialLink name={name} fontAwesomeIcon={icon} url={link} />
            </Box>
          ))}
          <Box mx={0} fontSize={7}>
            <IconLink href="#contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
          </Box>
        </Links>
      </Details>
      <Thumbnail>
        <img src={code} alt="Intro" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
