import React from 'react'
import {
  StyledContainer,
  Title,
  Date,
  Description,
  StyledPhoto,
} from './styles'

const Card = ({ title, date, img, description }) => (
  <StyledContainer>
    <StyledPhoto src={img} />
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
  </StyledContainer>
)

export default Card

// Recipe.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   imageURL: PropTypes.string.isRequired,
//   source: PropTypes.string.isRequired,
//   numberOfServings: PropTypes.number.isRequired,
//   sourceRecipeURL: PropTypes.string.isRequired,
//   totalTime: PropTypes.number.isRequired,
//   caloriesPerServing: PropTypes.number.isRequired,
//   ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
