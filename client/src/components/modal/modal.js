import React from "react"
import { Modal, Button } from 'react-bootstrap'
import './modal.css'

function EditModal(props) {
    return (
      <Modal
      className="background text-styles"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div id="modal-div">Commenter</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 id="modal-h4">Please enter your edited text.</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button className='commentBtn' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default EditModal