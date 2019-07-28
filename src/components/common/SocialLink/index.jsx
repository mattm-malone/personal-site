import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLink, InsideLink } from './styles'
import { Link } from 'gatsby'

export const SocialLink = ({ fontAwesomeIcon, url, alt }) => {
  let target = "_blank"
  if (url.includes('/movies')) {
    return (
      <Link to={url}>
        <InsideLink>
          <FontAwesomeIcon icon={fontAwesomeIcon} />
        </InsideLink>
      </Link>
    )
  }
  return (
    <IconLink href={url} target={target} alt={alt}>
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </IconLink>
  )
}
