import React from "react";
import styled from "styled-components";

const Header = ({ children }) => (
  <StyledHeader>
    <div className="header">{children}</div>
  </StyledHeader>
);

const StyledHeader = styled.div``;

export default Header;