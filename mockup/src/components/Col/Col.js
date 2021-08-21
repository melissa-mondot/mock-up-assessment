import React from "react";
import styled from "styled-components";

const Col = ({ children }) => (
  <StyledCol>
    <div className="col">{children}</div>
  </StyledCol>
);

const StyledCol = styled.div``;

export default Col;
