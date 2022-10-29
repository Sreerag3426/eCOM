import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import signIn from '../Backend/ApiManager';

function Modals(props) {
  const [firstName,setFname] = useState('');
    const handleFname = event =>{
        setFname(event.target.value);
    }
    const [lastName,setLname] = useState('');
    const handleLname = event =>{
        setLname(event.target.value);
    }
    const [email,setEmail] = useState('');
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const [password,setPass] = useState('');
    const handlePass = event =>{
        setPass(event.target.value);
    }
    const [confirmPassword,setPass2] = useState('');
    const handlePass2 = event =>{
        setPass2(event.target.value);
    }

  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={handleEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your FirstName.."
                onChange={handleFname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your LastName.."
                onChange={handleLname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password.."
                onChange={handlePass}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={handlePass2}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleManage}>
            Already A Customer ? LogIn
          </Button>
          <Button variant="primary"  onClick={()=>signIn(firstName,lastName,email,password,confirmPassword)}>
            SignUp
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default Modals