// Libs
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Components
import Layout from './components/Layout'
import App from './components/App'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={App} />
    <Route path='/home' component={App} />
  </Route>
)

export default routes
