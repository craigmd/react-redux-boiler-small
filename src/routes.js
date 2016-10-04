//Libs
import React from 'react'
import { Route } from 'react-router'

//Components
import Layout from './components/Layout'

let routes = () => {
  return <Route to="/" component={Layout}>
    <IndexRedirect to="" />
    <Route to="" component={} />
  </Route>
}
  <Route to="/" component={} />

export default routes
