//Libs
import React from 'react'
import { Route } from 'react-router'

//Components
import Layout from './components/Layout'

const routes = () => {
  return (
    <Route path="/" component={Layout}>
      <Route path="" component={} />
    </Route>
  );
};

export default routes
