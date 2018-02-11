import history from '../store/history'

// this function is not reducer but we benefit from logger
export const redirect = (path) => ({
  type: `Redirect to ${path}`,
  path: [],
  reducer: (state) => {
    history.push(path)
    return state
  },
})
