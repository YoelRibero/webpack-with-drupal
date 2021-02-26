import React from 'react'

import { Description } from '../Description'

export const Greeting = ({ title, description }) => (
  <>
    <h1>{ title }</h1>
    <Description>{ description }</Description>
    <time>{ new Date().toString() }</time>
  </>
)
