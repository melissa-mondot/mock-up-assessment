import React from "react";
import styled from "styled-components";

const Col = ({ children }) => <StyledCol className="col">{children}</StyledCol>;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 24.375rem;
`;

export default Col;
