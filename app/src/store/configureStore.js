import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from '../actions/rootReducer'
import getInitialState from '../state/initialState'
import Promise from 'bluebird'

const configureDev = () => {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  })
  const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(thunk, logger)
  )
  return store
}

const configureProd = () => {
  const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(thunk)
  )
  return store
}

export default () => {
  window.Promise = Promise
  let store
  if (IS_DEV) {
    store = configureDev()
  } else {
    store = configureProd()
  }
  return store
}
