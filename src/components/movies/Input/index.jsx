import React from 'react'
import { Input } from 'Common'
import { Center } from './styles'

export const TitleInput = props => {
  const { title, onChange } = props
  return (
    <Center>
      <h4>Input any movie title</h4>
      <Input value={title} onChange={onChange} type="text" />
    </Center>
  )
}
