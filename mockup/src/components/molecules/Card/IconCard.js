import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// icons
import { expertise, hygiene, lab, retention } from "../../../assets/icons";

const IconCard = () => (
  <Card>
    <Card.Body>
      <Image src={expertise} alt="expertise" />
      <Image src={hygiene} alt="hygiene" />
      <Image src={lab} alt="lab" />
      <Image src={retention} alt="retention" />
    </Card.Body>
  </Card>
);

export default IconCard;
