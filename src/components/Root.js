//Libs
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

//Routes
import routes from '../routes'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
