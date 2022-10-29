import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHeart,FaShoppingBag,FaUser} from "react-icons/fa";
import Modals from './Modals';
import LogInModal from './LogInModal';
import { Link } from 'react-router-dom';
import OtpModal from './OtpModal';
import swal from 'sweetalert';




function Navbars() {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [otp, setOtp] = useState(false);
    const handleClose = () => {
      setShow(false) ;
      // setShows(true);
    }
    const handleShow = () => setShow(true);
    const handleCloses = () => {
      setShows(false);
      // setShow(true);
    };
    const handleShows = () => setShows(true);
    const handleOtpShow = () => {
      setOtp(true) ;
      // setShows(true);
    }
    const handleOtpClose = () => {
      setOtp(false);
      swal({
        title: "Hurray !",
        text: "You are Logged In!",
        icon: "success",
      });
      
    } 

    const handleManage =()=>
    {
      setShow(false) ;
      setShows(true);
    }
    const handleManagerOtp =()=>
    {
      setShow(false) ;
      setOtp(true);
      
    }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to='/'><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link style ={{color: 'white'}} to ='/shop'>Services</Link></Nav.Link>
            <Nav.Link><Link style ={{color: 'white'}} to ='/shop'>Shop</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><FaHeart/></Nav.Link>
            <Nav.Link><Link style ={{color: 'white'}} to ='/cart'><FaShoppingBag/></Link></Nav.Link>
            <Nav.Link><FaUser onClick={handleShow}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modals show={show} handleClose={handleClose} handleShow={handleShow} shows={shows} handleCloses={handleCloses} handleShows={handleShows} handleManage={handleManage} handleManagerOtp={handleManagerOtp}/>
    <LogInModal shows={shows} handleCloses={handleCloses} handleShows={handleShows}/>
    <OtpModal otp={otp} handleOtpClose={handleOtpClose} handleOtpShow={handleOtpShow}/>
    </>
  );
}

export default Navbars;