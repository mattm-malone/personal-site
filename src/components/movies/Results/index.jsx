import React from 'react'
import { scaleOrdinal } from 'd3-scale'
import { schemePaired } from 'd3-scale-chromatic'
import { BarChart, LabelList, Cell, Label, Bar, XAxis, YAxis } from 'recharts'

const colors = scaleOrdinal(schemePaired).range()
const starting = Math.floor(Math.random() * 20)

export const Results = props => {
  return (
    <BarChart
      height={props.data.length * 50}
      width={500}
      data={props.data}
      layout="vertical"
      margin={{
        top: 0,
        right: 40,
        left: 20,
        bottom: 20,
      }}
    >
      <XAxis type="number" domain={[0, 100]}>
        <Label offset={0} value="Confidence" position="bottom" />
      </XAxis>
      <YAxis dataKey="Genre" type="category" />
      <Bar dataKey="Confidence">
        <LabelList value="Confidence" position="right" fill="#333" />
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[(starting + index) % 12]} />
        ))}
      </Bar>
    </BarChart>
  )
}
