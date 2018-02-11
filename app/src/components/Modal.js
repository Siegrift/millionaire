import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: true,
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
    if (this.props.onClose) this.props.onClose()
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>{this.props.okButton || 'OK'}</Button>{' '}
            {!this.props.onlyOk &&
              <Button color="secondary" onClick={this.toggle}>{this.props.cancelButton || 'Cancel'}</Button>
            }
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
