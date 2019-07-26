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
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Fade>
      </Thumbnail>
      <Details>
        <Fade right delay={200} key={1}>
          <h1>Hi There!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy.
          </p>
        </Fade>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
