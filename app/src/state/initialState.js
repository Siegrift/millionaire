import {questionState} from './questionState'
import {merge} from 'lodash'

// this functions merges all states into one global state passed
// to redux in create store. For each state create own state file
// and separate file for reducers...
export default () => merge({}, questionState)
