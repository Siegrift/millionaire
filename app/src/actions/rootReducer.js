import {forwardReducerTo} from '../utils/helpers'
import getInitialState from '../state/initialState'

const rootReducer = (state = getInitialState(), action) => {
  if (!action.reducer) return state // fallback for actions from different sources
  return forwardReducerTo(action.reducer, action.path)(state, action.payload)
}

export default rootReducer
