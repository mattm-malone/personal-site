import React, { Component } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import Fade from 'react-reveal/Fade'
import { Flex } from 'rebass'
import { Container } from 'Common'
import { IngredientInput } from './Input'
import { RecipeMasonry } from './Masonry'
import { Wrapper, InputField, StyledButton, PageWrapper } from './styles'

export class RecipeSearch extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: '',
      loading: false,
      showResults: false,
      results: [],
      start: 0,
      length: 20,
    }
    this.myRef = React.createRef()
  }

  handleChange = e => this.setState({ ingredients: e.target.value })

  createRecipe(newRecipe) {
    const newRecipes = this.state.results.slice()
    newRecipe.caloriesPerServing = Math.round(
      newRecipe.caloriesPerServing / newRecipe.numberOfServings
    )
    newRecipe.key = newRecipes.length
    newRecipes.push(newRecipe)
    this.setState({ results: newRecipes })
  }

  handleClick = () => {
    this.setState({ loading: true, results: [] })
    // this.scrollToMyRef()
    const query = encodeURI(this.state.value)
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=2e98039e&app_key=68a92e2d6de1a6d18e6fc3499f1aa18d&from=${
        this.state.start
      }&to=${this.state.start + this.state.length}`
    )
      .then(resp => resp.json())
      .then(resp => {
        if (resp.count) {
          console.log(resp)
          resp.hits.forEach(hit => {
            this.createRecipe({
              title: hit.recipe.label,
              source: hit.recipe.source,
              numberOfServings: hit.recipe.yield,
              img: hit.recipe.image,
              sourceRecipeURL: hit.recipe.url,
              totalTime: hit.recipe.totalTime,
              caloriesPerServing: hit.recipe.calories,
              ingredients: hit.recipe.ingredientLines,
            })
          })
        }
      })
      .then(() => {
        this.setState({ loading: false, showResults: true })
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err)
      })
  }

  render() {
    return (
      <Container as={Container}>
        <PageWrapper>
          <InputField>
            <IngredientInput
              onChange={this.handleChange}
              title={this.state.ingredients}
            />
            <div style={{ textAlign: 'center' }}>
              <StyledButton
                ref={this.myRef}
                onClick={() => {
                  this.handleClick()
                }}
              >
                Search
              </StyledButton>
            </div>
          </InputField>
        </PageWrapper>
        <Flex alignItems="center" justifyContent="center">
          <div style={this.state.loading ? {} : { visibility: 'hidden' }}>
            <Fade big key={0}>
              <PulseLoader color={'#4285f4'} />
            </Fade>
          </div>
        </Flex>
        <Wrapper>
          {this.state.showResults ? (
            <RecipeMasonry elements={this.state.results} />
          ) : (
            <div />
          )}
        </Wrapper>
      </Container>
    )
  }
}
