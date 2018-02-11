import update from '../utils/update'
import {getDatasetByName} from '../../assets/datasets'
import {last} from 'lodash'
import {playSound} from '../utils/helpers'
import {questionState} from '../state/questionState'

export const setValueIn = (path, obj) => ({
  type: `Set value of ${last(path)}`,
  payload: obj,
  path: path,
  reducer: (state) => obj,
})

const nextQuestion = () => ({
  type: 'Move to next question',
  path: [],
  reducer: (state) => update(state, {
    datasetIndex: {
      $set: state.datasetIndex + 1,
    },
    form: {
      colorForm: {
        $set: false,
      },
      disabled: {
        $set: false,
      },
    },
  }),
})

const colorOptions = (index) => ({
  type: 'Color form',
  payload: index,
  path: ['form'],
  reducer: (state) => update(state, {
    disabled: {
      $set: true,
    },
    colorForm: {
      $set: true,
    },
    selectedIndex: {
      $set: index,
    },
  }),
})

const initGame = () => ({
  type: 'Init game',
  path: [],
  reducer: (state) => update(state, {
    datasetIndex: {
      $set: 0,
    },
    dataset: {
      $set: getDatasetByName(state.datasetKey),
    },
  }),
})


export const questionChosen = (index, win) => async(dispatch, getState) => {
  dispatch(colorOptions(index))
  await playSound(win ? 'win.wav' : 'lose.wav')
  if (win) dispatch(setValueIn(['correct'], getState().correct + 1))
  dispatch(nextQuestion())
  await playSound('befQ.wav')
}

export const changeDatasetKey = (newDatasetKey) => ({
  type: 'Change dataset key',
  payload: newDatasetKey,
  path: ['datasetKey'],
  reducer: (state) => newDatasetKey,
})

export const changeName = (newName) => ({
  type: 'Change name',
  payload: newName,
  path: ['name'],
  reducer: (state) => newName,
})

export const startNewGame = () => async(dispatch, getState) => {
  dispatch(setValueIn(['form'], questionState.form))
  dispatch(initGame())
  await playSound('befQ.wav')
}
