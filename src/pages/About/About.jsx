import React, { useState } from "react";
import "./About.css";

import Imagesec from "../../components/Imagesec/Imagesec";

import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/image1.jpg";

import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";

function About() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleSelect = (selectedIndex) => {
    setCurrentSlide(selectedIndex + 1);
  };

  return (
    <div>
      <section className="about-us">
        <div>
          <h1>About Us</h1>
        </div>

        <div>
          <h2 className="text-center">We Believe You're Bright</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 about-left">
              <img
                src="https://i.ibb.co/wyGmjCz/img-section-02-min-1-qs6zngh4emk55ov1yrf78p7twwstj1uoysatsyplzc.jpg"
                alt="About Us Image"
                className="about-image"
              />
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide our clients with tailored financial
                solutions that cater to their unique needs. We strive to make
                the process of securing a mortgage as straightforward and
                stress-free as possible, guiding you through every step with
                transparency and integrity.
              </p>
            </div>
            <div className="col-md-6 about-right">
              <h3>Welcome to Alphaa Financial Solutions</h3>
              <p>
                At Alphaa Financial Solutions, we believe in empowering your
                property dreams with our premium financial services. Established
                with a vision to provide seamless loan processing and financial
                advisory, we have grown to become a trusted name in the
                Australian mortgage industry.
              </p>
              <h3>Our Story 🙂</h3>
              <p>
                Alphaa Financial Solutions was born out of a desire to simplify
                the complexities of property financing.
                <br /> Our founder, Mr. Pawan Punjabi, envisioned a company
                where customer-centricity and financial expertise go hand in
                hand. Over the years, we have helped thousands of Australians
                achieve their dream of owning a home, thanks to our unwavering
                commitment to excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-expertise">
        <div className="container">
          <div className="row">
            <div className="col-md-6 expertise-left">
              <div className="carousel-container-expertise">
                <Carousel
                  fade
                  interval={3000}
                  pause="hover"
                  wrap={true}
                  className="custom-carousel-expertise our-expertise-carousel"
                >
                  <Carousel.Item>
                    <img
                      src={image1}
                      alt="First slide"
                      className="d-block w-100"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="d-block w-100"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={image4}
                      alt="Third slide"
                      className="d-block w-100"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="col-md-6 expertise-right">
              <h3 className="expertise-h3">Why Choose Us</h3>
              <h1>Our Expertise</h1>
              <p>
                {" "}
                Expertise and Experience: With over 20 Years of experience in
                the industry, our team of financial experts brings a wealth of
                knowledge and expertise to the table.
              </p>
              <p>
                {" "}
                Customer-Centric Approach: We put our clients at the heart of
                everything we do, offering personalized advice and support to
                help you make informed financial decisions.
              </p>
              <br />
              <p>
                Innovative Solutions: We leverage the latest technology and
                financial products to provide innovative solutions that meet the
                evolving needs of our clients.
              </p>
              <br />
              <p>
                {" "}
                Transparency and Integrity: We pride ourselves on our ethical
                approach, ensuring transparency and integrity in all our
                dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-images">
                <img
                  src={testimonial1}
                  alt="Testimonial 1"
                  className="testimonial-image"
                />
                <img
                  src={testimonial2}
                  alt="Testimonial 2"
                  className="testimonial-image"
                />
                <img
                  src={testimonial3}
                  alt="Testimonial 3"
                  className="testimonial-image"
                />
              </div>

              <Carousel
                className="text-carousel mt-4 no-controls"
                onSelect={handleSelect}
              >
                <Carousel.Item>
                  <div className="carousel-text">
                    <p>
                      This is the text for the first slide of the carousel
                      distracted by the readable content of a page.
                    </p>
                  </div>

                  <div className="carousel-founder-name">
                    <h3>John Doe</h3>
                    <h3>CEO</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-text">
                    <p>
                      This is the text for the second slide of the carousel
                      distracted by the readable content of a page.
                    </p>
                  </div>

                  <div className="carousel-founder-name">
                    <h3>John Doe</h3>
                    <h3>CEO</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="carousel-text">
                    <p>
                      This is the text for the third slide of the carousel
                      distracted by the readable content of a page.
                    </p>
                  </div>

                  <div className="carousel-founder-name">
                    <h3>John Doe</h3>
                    <h3>CEO</h3>
                  </div>
                </Carousel.Item>
              </Carousel>

              <div className="carousel-pagination mt-2">
                <h4>{`${currentSlide}/${totalSlides}`}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Imagesec />
    </div>
  );
}

export default About;
