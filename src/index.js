// Libs
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// Store
import configureStore from './configureStore'
// Components
import Root from './components/Root'
// Sass
import './stylesheets/main.scss'

const store = configureStore()

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(Root)
  })
}
