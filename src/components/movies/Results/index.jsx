import React from 'react'

import { BarChart, Label, Legend, Bar, XAxis, YAxis, Tooltip } from 'recharts'

export const Results = props => (
  <BarChart
    height={props.data.length * 50}
    width={600}
    data={props.data}
    layout="vertical"
  >
    <Legend />
    <XAxis type="number" domain={[0, 100]} />
    <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
    <YAxis dataKey="Genre" type="category" />
    <Bar dataKey="Confidence" fill="#1580cb"></Bar>
  </BarChart>
)
