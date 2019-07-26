import React from 'react'
import Fade from 'react-reveal/Fade'
import { Container } from 'Common'
import { Wrapper, Grid } from './styles'
import { Project } from './Project'
import projects from './projects.json'

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {projects.map((p, i) => (
          <Fade bottom delay={i * 200} key={p.id}>
            <Project {...p} />
          </Fade>
        ))}
      </Grid>
    </Wrapper>
  )
}
