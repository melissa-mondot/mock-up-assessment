import React from "react";
import Row from "react-bootstrap/Row";
import { InfoCard, ImgCard } from "../../molecules";

const InfoOne = ({ title, text, linkText, image, alt }) => (
  <Row className="info-1 no-gutters">
    <InfoCard title={title} text={text} linkText={linkText} />
    <ImgCard image={image} alt={alt} />
  </Row>
);

export default InfoOne;
