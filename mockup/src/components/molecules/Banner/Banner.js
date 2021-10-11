import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";
// import { NavLink } from "react-router-dom";

// TODO: pass in var for button. Hide button unless var is passed in to Banner

const Banner = ({ src, text, btnTxt }) => (
  <Row style={{
    backgroundImage: `url(${src})`, backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "260px",
  }}>
    <Col className="my-auto" xs={{ span: 6, offset: 1 }}>
      <h2>{text}</h2>
      <Button>{btnTxt}</Button>
    </Col>
  </Row>
);

export default Banner;
