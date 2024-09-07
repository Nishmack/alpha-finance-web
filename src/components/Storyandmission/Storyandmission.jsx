import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Storyandmission.css";

function Storyandmission() {
  return (
    <section className="custom-section">
      <Container className="first-section">
        <Row>
          <Col>
            <span>Our Srory</span>
            <p>
              This is a paragraph explaining the content related to the heading.
              You can customize the text as needed.
            </p>
            <span className="ele">KNOW MORE</span>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 sec-section">
        <Row>
          <Col>
            <span>Our Mission</span>
            <p>
              This is a paragraph explaining the content related to the heading.
              You can customize the text as needed.
            </p>
            <span className="ele">KNOW MORE</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Storyandmission;
