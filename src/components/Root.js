// Libs
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

// Routes
import routes from '../routes'

const propTypes = {
  store: PropTypes.object.isRequired
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

Root.propTypes = propTypes

export default Root
