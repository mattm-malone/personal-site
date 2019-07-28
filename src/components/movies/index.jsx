import React, { Component } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import Fade from 'react-reveal/Fade'
import { Box, Flex } from 'rebass'
import { Container } from 'Common'
import { TitleInput } from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Results } from './Results'
import { Wrapper, InputField, StyledButton, PageWrapper } from './styles'
import { getPrediction } from './TensorFlow'

export class MoviePredict extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      showResults: false,
      showMore: false,
      loading: false,
    }
    this.results = []
    this.myRef = React.createRef()
  }

  scrollToMyRef = () =>
    window.scrollTo({ top: this.myRef.current.offsetTop, behavior: 'smooth' })

  handleChange = e => this.setState({ title: e.target.value })

  handleClick = () => {
    this.setState({ loading: true })
    getPrediction(this.state.title).then(response => {
      this.results = response
      this.setState({ showResults: true, loading: false })
      this.scrollToMyRef()
    })
  }

  dataToShow = () => {
    if (this.state.showMore) {
      return this.results
    }
    return this.results.slice(0, 3)
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
          <div style={this.state.loading ? {} : { display: 'none' }}>
            <Fade big key={0}>
              <PulseLoader color={'#4285f4'} />
            </Fade>
          </div>
        </Wrapper>
        <Wrapper ref={this.myRef}>
          {this.state.showResults ? (
            <>
              <Fade delay={100} bottom key={1}>
                <Results data={this.dataToShow()} />
              </Fade>
            </>
          ) : (
            <div />
          )}
        </Wrapper>
        <Flex alignItems="center" justifyContent="center">
          {this.state.showResults ? (
            <Fade delay={500} bottom key={2}>
              <Box fontSize={3}>
                <a
                  onClick={() =>
                    this.setState({ showMore: !this.state.showMore })
                  }
                >
                  <FontAwesomeIcon
                    icon={this.state.showMore ? faChevronUp : faChevronDown}
                  />{' '}
                  Show All
                </a>
              </Box>
            </Fade>
          ) : (
            <div />
          )}
        </Flex>
      </Container>
    )
  }
}
