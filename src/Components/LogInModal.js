import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import LogIn from '../Backend/ApiManager';


function LogInModal(props) {
  const [email,setEmailAdd] = useState('');
    const handleEmailAdd = event =>{
      setEmailAdd(event.target.value);
    }
    const [password,setPassword] = useState('');
    const handleLogin = event =>{
      setPassword(event.target.value);
    }
  return (
    <Modal show={props.shows} onHide={props.handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>LogIn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleEmailAdd}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password....."
                onChange={handleLogin}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={props.handleCloses}>
            SignUp
          </Button> */}
          <Button variant="primary" onClick={LogIn}>
            LogIn
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default LogInModal