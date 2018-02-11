import test from '../../assets/datasets/test'

export const questionState = {
  datasetKey: 'test',
  dataset: test.getDataset(),
  datasetIndex: 0,
  name: '',
  correct: 0,
  disabled: false,
  form: {
    colorForm: false,
    selectedIndex: -1,
  },
}
