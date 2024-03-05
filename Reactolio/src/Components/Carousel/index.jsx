import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function HomeCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item className="d-flex justify-content-center">
        <Image className="" src="https://placehold.co/4000x500" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="d-flex justify-content-center">
        <Image text="Second slide" src="https://placehold.co/1000x500" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="d-flex justify-content-center">
        <Image text="Third slide" src="https://placehold.co/1000x500" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export {HomeCarousel};