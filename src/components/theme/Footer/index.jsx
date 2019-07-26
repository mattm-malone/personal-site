import React from 'react'
import { Container, SocialLink } from 'Common'
import { Box } from 'rebass'
import { Wrapper, Flex, Links, Details } from './styles'
import { SocialMediaLinks } from './social'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Matt Malone</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with
          Gatsby
        </span>
      </Details>
      <Links>
        {SocialMediaLinks.map(({ name, link, icon }) => (
          <Box mx={0} fontSize={4}>
            <SocialLink name={name} fontAwesomeIcon={icon} url={link} />
          </Box>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
