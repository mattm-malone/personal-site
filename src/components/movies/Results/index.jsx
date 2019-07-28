import React, { Component } from 'react'

import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

export const Results = props => (
  <BarChart
    height={props.data.length * 50}
    width={600}
    data={props.data}
    layout="vertical"
  >
    <XAxis type="number" />
    <Tooltip wrapperStyle={{ backgroundColor: '#ccc' }} />
    <YAxis dataKey="genre" type="category" />
    <Bar dataKey="pred" fill="#1580cb" />
  </BarChart>
)
