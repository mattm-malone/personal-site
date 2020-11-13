import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <Fade left delay={200} key={0}>
          <img src={dev} alt="About Me" />
        </Fade>
      </Thumbnail>
      <Details>
        <Fade right delay={200} key={1}>
          <h1>Who?</h1>
          <p>
            Currently working at Liberty Mutual as a dev
            creating modern web experiences.
          </p>
          <p>
            Through a love for learning and some experience, I have
            experience in full stack web development with
            React, GraphQL, Node, and AWS.
          </p>
          <p>
            When I'm not learning, working and developing, I enjoy rock climbing,
            cycling, cooking, and videogames.
          </p>
        </Fade>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
