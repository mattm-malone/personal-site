import React from 'react'
import { Input } from 'Common'
import { Center } from './styles'

export const IngredientInput = props => {
  const { ingredients, onChange } = props
  return (
    <Center>
      <h4>Input your ingredients!</h4>
      <Input value={ingredients} onChange={onChange} type="text" />
    </Center>
  )
}
