import React from "react";
import Card from "react-bootstrap/Card";

const ImgCard = ({ image, alt }) => (
  <Card className="img-card">
    <Card.Img variant="top" src={image} alt={alt} />
  </Card>
);

export default ImgCard;
