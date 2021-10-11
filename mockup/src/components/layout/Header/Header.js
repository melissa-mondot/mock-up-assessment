import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

// // images
import logo from "../../../assets/logo/logo-white.svg";

const Header = () => (
  <Navbar className="position-absolute" bg="transparent" variant="transparent">
    <Container>
      <Navbar.Brand>
        <img src={logo} alt="" height="30" />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
