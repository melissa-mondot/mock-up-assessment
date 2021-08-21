import React from "react";
import styled from "styled-components";

const Button = ({ children }) => (
  <StyledButton>
    <div className="button">{children}</div>
  </StyledButton>
);

const StyledButton = styled.div``;

export default Button;