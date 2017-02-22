// Libs
import React from 'react'
import { render } from 'react-dom'
// Store
import configureStore from './configureStore'
// Components
import Root from './components/Root'
// Sass
import './stylesheets/main.scss'

render(
  <Root store={configureStore()} />,
  document.getElementById('root')
)
