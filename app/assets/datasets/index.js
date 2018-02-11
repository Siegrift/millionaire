import test from './test'
import javaMilionar from './javaMilionar'

export const datasets = {
  [test.name]: test.getDataset,
  [javaMilionar.name]: javaMilionar.getDataset,
}

export const getDatasetByName = (name) => {
  return datasets[name]()
}

export const getDatasetKeys = () => Object.keys(datasets)
