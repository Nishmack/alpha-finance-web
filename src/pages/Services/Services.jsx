import React from "react";
import "./Services.css";

import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/image1.jpg";

import image3 from "../../assets/image3.jpg";

function Services() {
  const services = [
    {
      title: "Home Loans",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Refinancing",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Self Managed Super fund",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Personal loans",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "First home buyer",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Investment Property",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Asset finance",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Expat Loans",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
    {
      title: "Expat Loans",
      description:
        "This is a paragraph explaining the content related to the heading. You can customize the text as needed.Whether you’re a first-time homebuyer eager to find your dream home, looking to refinance for better rates and terms, or investing in property to build your portfolio, our expert team is here to provide personalized solutions tailored to your financial goals.",
    },
  ];

  return (
    <div>
      {/* <CustomNavbar /> 
        <Footer />
        <Imagesec /> */}
      <div className="service-page-head">
        <h1>Services</h1>
      </div>
      <section className="services">
        <div className="services-content">
          <h1>Services</h1>
        </div>
      </section>

      <section className="custom-section1-page">
        <Container>
          <div className="text-center-page mb-4">
            <span>Our Services</span>
            <p>Find the right home for your budget</p>
          </div>

          <Row>
            <Col xs={12} md={8}>
              <Row>
                {services.map((service, index) => (
                  <Col
                    xs={12}
                    md={6}
                    key={index}
                    className="mb-4"
                    style={{ flex: "0 0 auto" }}
                  >
                    <div className="service-card">
                      <h3>{service.title}</h3>
                      <hr className="my-4" />
                      <p>{service.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="carousel-container"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <Carousel
                  fade
                  interval={3000} // Slide transition every 3 seconds
                  pause="hover" // Pause the slide when hovering
                  controls={true} // Show next/prev controls
                  indicators={true} // Show slide indicators (dots)
                  wrap={true} // Enable continuous loop (wrap-around)
                  className="custom-carousel1 our-services-carousel"
                  style={{ height: "100%" }}
                >
                  <Carousel.Item>
                    <img
                      src={image1}
                      alt="First slide"
                      className="d-block w-100"
                    />
                    <Carousel.Caption>
                      <div className="servicecarousel">
                        <div>
                          <span>
                            At Alphaa Financial Solutions, we offer a
                            comprehensive range of financial services
                          </span>
                          <p>
                            We have the expertise to guide you through the
                            process.
                          </p>
                        </div>
                        <div>
                          <p className="text1">100+</p>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="d-block w-100"
                    />
                    <Carousel.Caption className="servicecarousel">
                      <span>
                        At Alphaa Financial Solutions, we offer a comprehensive
                        range of financial services
                      </span>
                      <p>
                        We have the expertise to guide you through the process.
                      </p>
                      <div>
                        <p className="text1">100+</p>
                        <p className="text2">Simplify the loan</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;
