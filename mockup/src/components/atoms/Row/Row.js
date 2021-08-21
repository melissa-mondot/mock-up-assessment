import React from "react";
import styled from "styled-components";

const Row = ({ children }) => (
  <StyledRow>
    <div className="row">{children}</div>
  </StyledRow>
);

const StyledRow = styled.div``;

export default Row;
