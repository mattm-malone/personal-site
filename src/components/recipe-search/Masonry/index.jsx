import React from 'react'
import Columns from 'react-columns'
import Fade from 'react-reveal/Fade'
import Card from '../Card'

export const RecipeMasonry = props => {
  const queries = [
    {
      columns: 4,
      query: 'min-width: 500px',
    },
    {
      columns: 5,
      query: 'min-width: 1000px',
    },
  ]

  const childElements = props.elements.map(element => (
    <Fade bottom delay={element.key * 150}>
      <Card
        img={element.img}
        title={element.title}
        date={element.date}
        description={element.description}
      />
    </Fade>
  ))
  return (
    <Columns gap="10px" queries={queries}>
      {childElements}
    </Columns>
  )
}
