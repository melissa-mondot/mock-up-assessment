import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
// images
import { instagram, facebook } from "../../../assets/icons";

const Footer = () => (
    <Container className="footer">
      <Row className="my-3">
          <Col xs={6}>
            <Image height="40" src={instagram} alt="Instagram logo" />
            <Image height="40" src={facebook} alt="Facebook logo" />
          </Col>
      </Row>
    </Container>
);

export default Footer;
