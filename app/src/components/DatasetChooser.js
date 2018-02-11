import React from 'react'
import {Form, FormGroup, Label} from 'reactstrap'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import bindClosures from 'react-bind-closures'
import { compose } from '../utils/helpers'
import {changeDatasetKey, changeName, startNewGame} from '../actions/questionActions'
import {getDatasetKeys} from '../../assets/datasets'

const DatasetChooser = (props) => {
  return (
    <Form className="chooser-form">
      <FormGroup>
        <Label className="chooser-label">Enter your name</Label>
        <input
          type="input"
          placeholder="Enter your name here..."
          onChange={props.handleNameChange}
          className="form-control"
          value={props.name}
        />
      </FormGroup>
      <FormGroup>
        <Label className="chooser-label">Choose dataset</Label>
        <select
          type="select"
          onChange={props.handleDatasetSelect}
          className="form-control chooser-select"
          value={props.datasetKey}
        >
          {getDatasetKeys().map((opt, ind) => <option key={ind} className="chooser-select">{opt}</option>)}
        </select>
      </FormGroup>
      <input type="button" className="chooser-submit btn btn-secondary" onClick={props.handleSubmit} value="Play"/>
    </Form>
  )
}

const bindPanel = bindClosures({
  handleDatasetSelect: (props, e) => {
    props.changeDatasetKey(e.target.value)
  },
  handleNameChange: (props, e) => {
    props.changeName(e.target.value)
  },
  handleSubmit: (props, e) => {
    props.startNewGame()
    props.history.push('/millionaire')
  },
})

const connectPanel = connect(
  (state) => ({
    datasetKey: state.datasetKey,
    name: state.name,
  }),
  (dispatch) => bindActionCreators({changeDatasetKey, changeName, startNewGame}, dispatch),
)

export default compose(connectPanel, bindPanel)(DatasetChooser)
