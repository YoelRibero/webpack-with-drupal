import React from 'react'
import ReactDOM from 'react-dom'

import { Greeting } from './components/Greeting'

ReactDOM.render(
  <Greeting
    title="Hello World from React"
    description="This is a React Component"
  />,
  document.getElementById("block-one")
)
