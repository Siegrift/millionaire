import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../store/history'

import Millionaire from './Millionaire'
import DatasetChooser from './DatasetChooser'

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={DatasetChooser} />
        <Route path="/millionaire" component={Millionaire} />
      </Switch>
    </Router>
  )
}


export default App
