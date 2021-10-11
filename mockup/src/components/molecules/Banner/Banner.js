import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import { NavLink } from "react-router-dom";

// TODO: pass in var for button. Hide button unless var is passed in to Banner

const Banner = ({ src }) => (
  <Container>
    <Image src={src} />
  </Container>
);

export default Banner;
