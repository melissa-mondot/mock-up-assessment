import React from "react";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

const InfoCard = ({ title, text, linkText }) => (
  <Col className="info-card m-0 p-3" xs={12}>
    <h2>{title}</h2>
    <p>{text}</p>
    {/* TODO: link to should be programmatic  */}
    <NavLink to="/test">
      <small>{linkText}</small>
    </NavLink>
  </Col>
);

export default InfoCard;
