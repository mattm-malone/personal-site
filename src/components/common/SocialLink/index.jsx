import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLink } from './styles'

export const SocialLink = ({ fontAwesomeIcon, url, alt }) => (
  <IconLink href={url} target="_blank" alt={alt}>
    <FontAwesomeIcon icon={fontAwesomeIcon} />
  </IconLink>
)
