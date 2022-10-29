import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function OtpModal(props) {
  return (
    <Modal show={props.otp} onHide={props.handleOtpCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <p>An OTP has sent to your registered mail ID</p>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter OTP....."
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={props.handleCloses}>
            SignUp
          </Button> */}
          <Button variant="primary" onClick={props.handleOtpClose}>
            LogIn
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default OtpModal