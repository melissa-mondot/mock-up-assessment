import React from "react";
import styled from "styled-components";
import { Row } from "../../atoms";
// images
import { instagram, facebook } from "../../../assets/icons";

const Footer = () => (
  <StyledFooter className="footer">
    <Row><small>Follow Us:</small></Row>
    <Row>
      {/* TODO: Link to RGM SM accounts */}
      <img src={instagram} alt="Instagram logo" />
      <img src={facebook} alt="Facebook logo" />
    </Row>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.color.altBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 9.5rem;
  img {
    height: 2.9375rem;
    height: 2.9375rem;
    margin: 0.6875rem;
  }
`;

export default Footer;
