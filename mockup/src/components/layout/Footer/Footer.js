import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
// images
import { instagram, facebook } from "../../../assets/icons";

const Footer = () => {
  const currDate = new Date();
  return (
    <Container className="footer">
      <div className="business-info d-flex flex-column mt-5 mx-3">
        <h1>Business Name</h1>
        <p><i><b>Company tagline noted here</b></i></p>
        <address>
          <p className="mb-0">123 4th St</p>
          <p className="mb-0"> Somewhere, Earth</p>
          <p className="mb-0"><i>icon</i> 555.555.5555</p>
          <p className="mb-5"><i>icon</i> info@companyname.com</p>
          <div className="socmed d-flex justify-content-around" style={{ height: "2.5rem" }}>
            <Image src={instagram} alt="Instagram logo" />
            <Image src={facebook} alt="Facebook logo" />
          </div>
        </address>
        <small className="align-self-center mt-5">Company Name, All Rights Reserved {currDate.getFullYear()}</small>
      </div>
    </Container>
  )
};

export default Footer;
