import React from 'react'
import {Button, Row, Col} from 'reactstrap'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import bindClosures from 'react-bind-closures'
import { compose } from '../utils/helpers'
import {questionChosen} from '../actions/questionActions'
import {redirect} from '../actions/routerActions'
import Modal from './Modal'

const handleColorButtons = (props, index) => {
  if (!props.colorForm) {
    return ''
  } else if (index === props.dataset[props.index].correct) {
    return 'green'
  } else if (index === props.selectedIndex) {
    return 'red'
  } else {
    return ''
  }
}

const handleColorDiv = (props) => {
  if (!props.colorForm) return
  return props.selectedIndex === props.dataset[props.index].correct ? 'green' : 'red'
}

const MillionaireForm = (props) => {
  if (props.dataset.length === props.index) {
    return (
      <Modal
        title={`Game over ${props.name}`}
        body={`No more questions! You got ${props.correct}\\${props.index}`}
        okButton="New game"
        onClose={props.handleModalClose}
        onlyOk
      />
    )
  }
  const current = props.dataset[props.index]
  return (
    <div className="millionaire-form">
      <div className={`form-question ${handleColorDiv(props)}`}>
        {current.question}
      </div>
      <Row>
        <Col className="form-col">
          <Button
            onClick={props.handleClick(0)}
            className={`form-button ${handleColorButtons(props, 0)}`}
            disabled={props.disabled}
          >
            {current.options[0]}
          </Button>
        </Col>
        <Col className="form-col">
          <Button
            onClick={props.handleClick(1)}
            className={`form-button ${handleColorButtons(props, 1)}`}
            disabled={props.disabled}
          >
            {current.options[1]}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="form-col">
          <Button
            onClick={props.handleClick(2)}
            className={`form-button ${handleColorButtons(props, 2)}`}
            disabled={props.disabled}
          >
            {current.options[2]}
          </Button>
        </Col>
        <Col className="form-col">
          <Button
            onClick={props.handleClick(3)}
            className={`form-button ${handleColorButtons(props, 3)}`}
            disabled={props.disabled}
          >
            {current.options[3]}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

const bindPanel = bindClosures({
  handleClick: (props, index) => async() => {
    if (index === props.dataset[props.index].correct) {
      props.questionChosen(index, true)
    } else {
      props.questionChosen(index, false)
    }
  },
  handleModalClose: (props) => {
    props.redirect('/')
  },
})

const connectPanel = connect(
  (state) => {
    return {
      dataset: state.dataset,
      index: state.datasetIndex,
      name: state.name,
      selectedIndex: state.form.selectedIndex,
      colorForm: state.form.colorForm,
      disabled: state.form.disabled,
      correct: state.correct,
    }
  },
  (dispatch) => bindActionCreators({questionChosen, redirect}, dispatch),
)

export default compose(connectPanel, bindPanel)(MillionaireForm)
