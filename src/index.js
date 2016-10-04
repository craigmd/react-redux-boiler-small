//Libs
import React from 'react'
import { render } from 'react-dom'

//Components
import Root from './components/Root'

render(
  <Root store={store}/>,
  document.getElementById('root')
);
