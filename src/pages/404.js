import React from 'react'
import NavbarPure from '../components/theme/Header/NavBarPure'
import { Layout, SEO } from 'Common'

export default () => (
  <Layout>
    <NavbarPure />
    <SEO title="404: Not found" location="/404" />
    <center>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist ;(</p>
    </center>
  </Layout>
)
