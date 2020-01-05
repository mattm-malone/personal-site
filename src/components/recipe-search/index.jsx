import React, { Component } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import Fade from 'react-reveal/Fade'
import { Box, Flex } from 'rebass'
import { Container } from 'Common'
import { IngredientInput } from './Input'
import { Wrapper, InputField, StyledButton, PageWrapper } from './styles'

export class RecipeSearch extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: '',
      loading: false,
      showResults: false,
    }
    this.results = []
    this.myRef = React.createRef()
  }

  handleChange = e => this.setState({ ingredients: e.target.value })

  handleClick = () => {
    this.setState({ loading: true })
    // getPrediction(this.state.ingredients).then(response => {
    //   this.results = response
    //   this.setState({ showResults: true, loading: false })
    //   this.scrollToMyRef()
    // })
    this.setState({ showResults: true, loading: false })
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
                Predict
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
            <>
              <Fade delay={100} bottom key={1}>
                <h3>Temp</h3>
              </Fade>
            </>
          ) : (
            <div />
          )}
        </Wrapper>
      </Container>
    )
  }
}
