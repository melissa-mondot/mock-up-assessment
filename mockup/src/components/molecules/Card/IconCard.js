import React from "react";
import styled from "styled-components";
import { Col } from "../../atoms";

const IconCard = ({ ...props }) => (
  <StyledCard>
    <div className="card">This is an icon card</div>
  </StyledCard>
);

const StyledCard = styled(Col)``;

export default IconCard;
