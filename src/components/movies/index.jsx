import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { Flex } from 'rebass'
import { Container } from 'Common'
import { TitleInput } from './Input'
import { Results } from './Results'
import { Wrapper, InputField, StyledButton, PageWrapper } from './styles'
import { getPrediction } from './TensorFlow'

export class MoviePredict extends Component {
  constructor() {
    super()
    this.state = { title: '', showResults: false, showMore: false }
    this.results = []
  }

  handleChange = e => this.setState({ title: e.target.value })

  handleClick = () => {
    getPrediction(this.state.title).then(response => {
      this.results = response
      this.setState({ showResults: true })
    })
  }

  dataToShow = () => {
    if (this.state.showMore) {
      return this.results
    }
    return this.results.slice(0, 3)
  }

  getHeight = () => {
    if (this.state.showMore) {
      return 200
    }
    return 500
  }

  render() {
    return (
      <Container as={Container}>
        <PageWrapper>
          <InputField>
            <TitleInput onChange={this.handleChange} title={this.state.title} />
            <div style={{ textAlign: 'center' }}>
              <StyledButton
                onClick={() => {
                  this.handleClick()
                }}
              >
                Predict
              </StyledButton>
            </div>
          </InputField>
        </PageWrapper>
        <Wrapper>
          <Flex>
            <Fade delay={200} big key={1}>
              {this.state.showResults ? (
                <>
                  <Results data={this.dataToShow()} height={this.getHeight()} />
                  <button
                    onClick={() =>
                      this.setState({ showMore: !this.state.showMore })
                    }
                  >
                    Show All
                  </button>
                </>
              ) : (
                <div />
              )}
            </Fade>
          </Flex>
        </Wrapper>
      </Container>
    )
  }
}
