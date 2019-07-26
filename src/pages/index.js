import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Projects, Contact } from 'Components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
)
