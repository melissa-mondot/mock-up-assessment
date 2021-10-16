import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// icons
import { expertise, hygiene, lab, retention } from "../../../assets/icons";

// TODO: take in vars with data and map images for reusability
// TODO: subtle animation for icons

const IconCard = () => (
  <Row>
    <Col xs={6}>
      <Image src={expertise} alt="expertise" fluid className="p-4" />
    </Col>
    <Col xs={6}>
      <Image src={hygiene} alt="hygiene" fluid className="p-4" />
    </Col>
    <Col xs={6}>
      <Image src={lab} alt="lab" fluid className="p-4" />
    </Col>
    <Col xs={6}>
      <Image src={retention} alt="retention" fluid className="p-4" />
    </Col>
  </Row>
);

export default IconCard;
