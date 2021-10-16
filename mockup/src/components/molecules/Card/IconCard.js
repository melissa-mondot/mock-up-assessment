import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// icons

// TODO: take in vars with data and map images for reusability
// TODO: subtle animation for icons

const IconCard = ({ icons }) => {
  console.log(icons);
  const iconTiles = icons.map((key, icon) => (
    <Col className="my-3" key={key}>
      <Image src={icons[icon][0]} alt={`Illustration of ${icons[icon][1]}`} />
    </Col>
  ));
  return <Row>{iconTiles}</Row>;
};

export default IconCard;
