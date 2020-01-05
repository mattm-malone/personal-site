import React from 'react'
import { Layout, SEO } from 'Common'
import { MoviePredict } from 'Components/movies'
import NavbarPure from '../components/theme/Header/NavBarPure'

export default () => (
  <Layout>
    <SEO title="Matt Malone - Movie-Genre Predictor" />
    <NavbarPure />
    <MoviePredict />
  </Layout>
)
