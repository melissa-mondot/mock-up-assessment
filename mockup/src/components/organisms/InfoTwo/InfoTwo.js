import React from "react";
import Row from "react-bootstrap/Row";
import { InfoCard, IconCard } from "../../molecules";

const InfoTwo = ({ title, text, linkText }) => (
  <Row className="info-1">
    <InfoCard title={title} text={text} linkText={linkText} />
    <IconCard />
  </Row>
);

export default InfoTwo;
