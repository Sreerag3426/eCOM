import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../Components/Css/Components.css'

function Content() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col><img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/5_7df89eec-a282-4d62-b053-d2727d6ee755_2000x.png?v=1665853233'></img></Col>
                <Col><img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_c1f08d4c-f866-4c10-a764-ed0aa9c5c99f_2000x.png?v=1665853128'></img></Col>
                <Col><img src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_7fb2976f-1739-4f80-a6c6-2491433fe690_2000x.png?v=1665853163'></img></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Content