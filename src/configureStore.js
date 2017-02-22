// Libs
import { createStore } from 'redux'

// Reducers
import app from './reducers'

const configureStore = () => {
  return createStore(app)
}

export default configureStore
