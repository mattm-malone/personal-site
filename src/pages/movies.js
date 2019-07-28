import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro } from 'Components/landing'
import { MoviePredict } from 'Components/movies'
import Navbar from '../components/theme/Header/NavBarPure'

export default () => (
  <Layout>
    <SEO />
    <Navbar />
    <MoviePredict />
  </Layout>
)
