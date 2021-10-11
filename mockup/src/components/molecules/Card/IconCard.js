import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// icons
import { expertise, hygiene, lab, retention } from "../../../assets/icons";

// TODO: take in vars with data and map images for reusability
// TODO: subtle animation for icons

const IconCard = () => (
  <Card>
    <Card.Body>
      <Row>
        <Col xs={6}>
          <Image src={expertise} alt="expertise" fluid />
        </Col>
        <Col xs={6}>
          <Image src={hygiene} alt="hygiene" fluid />
        </Col>
        <Col xs={6}>
          <Image src={lab} alt="lab" fluid />
        </Col>
        <Col xs={6}>
          <Image src={retention} alt="retention" fluid />
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default IconCard;
