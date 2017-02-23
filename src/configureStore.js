// Libs
import { createStore } from 'redux'

// Reducers
import app from './reducers'

const configureStore = () => {
  const store = createStore(app)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
