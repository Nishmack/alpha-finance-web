import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstSlideImage from "../../assets/firstslideimage.jpg";
import secondSlideImage from "../../assets/secondslideimage.jpg";
import thirdSlideImage from "../../assets/thirdslideimage.jpg";
import "./Carousal.css";

function CustomCarousel() {
  return (
    <Carousel
      fade
      interval={3000}
      pause="hover"
      controls={true}
      indicators={true}
      wrap={true}
      className="custom-carousel"
    >
      <Carousel.Item>
        <img
          style={{ height: "100vh" }}
          className="d-block w-100"
          src={firstSlideImage}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            Empowering Financial Security
            <br />
            <span className="highlighted">for Everyone</span>
          </h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum ifdfb
            bvhsbvh.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "100vh" }}
          className="d-block w-100"
          src={secondSlideImage}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            Empowering Financial Security <br />
            <span className="highlighted">for Everyone</span>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: "100vh" }}
          className="d-block w-100"
          src={thirdSlideImage}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            Empowering Financial Security <br />
            <span className="highlighted">for Everyone</span>
          </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
