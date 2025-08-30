import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import krstack3 from '../images/krstack3.png'
import krstack2 from '../images/krstack2.jpg'
import promotion from '../images/promotion1.png'

function CarouselPage() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={krstack3}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={krstack2}
        alt=""
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'40vh'}}
        className="d-block w-100"
        src={promotion}
        alt=""
      />
    </Carousel.Item>

    
  </Carousel>
  </div>
  )
}

export default CarouselPage