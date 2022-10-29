import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web_2_2_2000x.png?v=1665727855a"
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/diwali-banner_2000x.gif?v=1664442921"
        alt="Second slide"
      />

      <Carousel.Caption>
        {/* <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web_3_2000x.png?v=1665752361"
        alt="Third slide"
      />

      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider