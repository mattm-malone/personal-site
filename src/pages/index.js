import React from 'react'
import { Layout, SEO } from 'Common'
import { MouseIcon } from 'Components/theme'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Intro, Skills, Projects, Contact } from 'Components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <AnchorLink href="#about">
      <MouseIcon />
    </AnchorLink>
    <Skills />
    <Projects />
    <Contact />
  </Layout>
)
