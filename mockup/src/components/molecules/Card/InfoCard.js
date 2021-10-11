import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const InfoCard = ({ title, text, linkText }) => (
  <Card className="info-card">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      {/* TODO: link to should be programmatic  */}
      <NavLink to="/test">
        <small>{linkText}</small>
      </NavLink>
    </Card.Body>
  </Card>
);

export default InfoCard;
