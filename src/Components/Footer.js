import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Components/Css/Components.css'


function Footer() {
  return (
    <section id='footer-content'>
  
    <Container fluid>
        <Row>
        <Col>
        <div className="footer-title">
                                 <h4>About Us</h4>
                               <p> HARD STRATA is a diversified consultancy specializing in Strategic Planning,
                                Project Management.</p>
                                 <ul>
                                    <li>+91 9539128357</li>
                                    <li>info@hardstrata.com</li>
                                </ul>
                            </div>
        </Col>
        <Col>
        <div className="footer-title">
                                <h4>Useful links</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Projects</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
        </Col>
        <Col>
        <div className="footer-title">
                                <h4>Project Tags</h4>
                                <ul>
                                    <li>Residential</li>
                                    <li>Shopping Complex</li>
                                    <li>Ware Houses</li>
                                    <li>Highrise Buildings</li>
                                    <li>Apartments</li>
                                </ul>
                            </div>
        </Col>
        <Col>
        <div className="footer-title">
                                <h4>Reach Us</h4>
                                <ul>
                                    <li>Hardstrata</li>
                                    <li>hardstrata.com</li>
                                    <li>HiLite Business Park</li>
                                    <li>Calicut</li>
                                    <li>Kerala</li>
                                </ul>
                            </div>
        </Col>
        </Row>
        </Container>

        </section>
  )
}

export default Footer