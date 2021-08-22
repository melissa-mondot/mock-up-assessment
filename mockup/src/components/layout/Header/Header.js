import React from "react";
import styled from "styled-components";
// images
import logo from "../../../assets/logo/logo-white.svg";

const Header = ({ children }) => (
  <StyledHeader>
    <div className="header">
      <img src={logo} alt="Rooster Grin Media Logo" />
    </div>
    {children}
  </StyledHeader>
);

const StyledHeader = styled.header`
  .header {
    position: absolute;
    z-index: 10;
    img {
      transform: translate(20%, 10%);
      height: 2.8125rem;
      width: 15.5625rem;
    }
  }
`;

export default Header;
