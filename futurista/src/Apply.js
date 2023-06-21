import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Apply(props) {
  return (
    <>
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Website: www.{props.companyUrl}</h4>
        <p>
          Please send us an email if you are interested in this position.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default Apply;
