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
          <h1>About</h1>
          <p>
            I'm a senior Computer Science student at UMass Amherst. I have a
            strong passion for developing responsive and intuitive experiences
            for a digital world.
          </p>
          <p>
            Through projects, internships, and a love for learning, I have
            experience in modern web development with React, JavaScript, MERN,
            and JAM stacks.
          </p>
          <p>
            When I'm not learning and developing, I enjoy rock climbing,
            cycling, and videogames.
          </p>
        </Fade>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
