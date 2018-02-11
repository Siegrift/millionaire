'use-strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import getConfiguredStore from './store/configureStore'
import 'babel-polyfill'
// load bootstrap for reactstrap
import 'bootstrap/dist/css/bootstrap.css'
// load global scss
import '../assets/scss/style.scss'

const store = getConfiguredStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
