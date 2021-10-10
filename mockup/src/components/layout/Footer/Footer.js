import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// images
import { instagram, facebook } from "../../../assets/icons";

const Footer = () => (
  <Navbar>
    <Container>
      {/* TODO: Link to RGM SM accounts */}
      <img src={instagram} alt="Instagram logo" />
      <img src={facebook} alt="Facebook logo" />
    </Container>
  </Navbar>
);

export default Footer;
