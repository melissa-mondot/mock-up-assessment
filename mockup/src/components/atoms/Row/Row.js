import React from "react";
import styled from "styled-components";

const Row = ({ children }) => <StyledRow className="row">{children}</StyledRow>;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
`;

export default Row;
