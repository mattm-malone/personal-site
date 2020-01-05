import React from 'react'
import NavbarPure from '../components/theme/Header/NavBarPure'
import { RecipeSearch } from 'Components/recipe-search'
import { Layout, SEO } from 'Common'

export default () => (
  <Layout>
    <SEO title="Make ¡t Fresh!" location="/recipe-search" />
    <NavbarPure />
    <RecipeSearch />
  </Layout>
)
