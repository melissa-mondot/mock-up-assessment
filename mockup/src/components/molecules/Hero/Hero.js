import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Hero = ({ src }) => (
  <Row
    className="hero no-gutters"
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      minHeight: "260px",
      color: "white"
    }}
  >
    <Col className="m-auto" xs={10}>
      <h1>Lorem Ipsum Dineth</h1>
      <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      <Button>et dolore</Button>
    </Col>
  </Row>
);

export default Hero;
