import React from 'react'
import { Layout, SEO } from 'Common'
import { MoviePredict } from 'Components/movies'
import Navbar from '../components/theme/Header/NavBarPure'

export default () => (
  <Layout>
    <SEO />
    <Navbar />
    <MoviePredict />
  </Layout>
)
