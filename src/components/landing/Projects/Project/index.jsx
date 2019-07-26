import React from 'react'
import { Text, Flex, Box } from 'rebass'
import { Card, SocialLink, ImageSubtitle } from 'Common'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  Title,
  TextContainer,
  ImageContainer,
  ProjectTag,
  CARD_HEIGHT,
} from './styles'

export const Project = ({
  name,
  description,
  projectUrl,
  repositoryUrl,
  type,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        {/* <ProjectImage src={logo.image.src} alt={logo.title} /> */}
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            {repositoryUrl ? (
              <Box mx={2} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon={faGithub}
                  url={repositoryUrl}
                />
              </Box>
            ) : (
              <div />
            )}
            {repositoryUrl ? (
              <Box mx={2} fontSize={5}>
                <SocialLink
                  name="See project"
                  fontAwesomeIcon={faLink}
                  url={projectUrl}
                />
              </Box>
            ) : (
              <div />
            )}
          </Flex>
          <ImageSubtitle bg="#6b63ff" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
)
