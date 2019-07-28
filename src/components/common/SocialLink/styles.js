import styled from 'styled-components'
import { Link } from 'rebass'
import { navigate } from "gatsby"

export const IconLink = styled(Link)`
  transition: color 0.5s;
  color: #4285f4;
  &:hover {
    color: #6da2f8;
  }
`

export const InsideLink = styled.div`
  transition: color 0.5s;
  color: #4285f4;
  &:hover {
    color: #6da2f8;
  }
`