import React from "react";
import styled from "styled-components";
import Col from "../../atoms/Col";

const InfoCard = ({ ...props }) => (
  <StyledCard>
    <div className="card">This is a card</div>
  </StyledCard>
);

const StyledCard = styled(Col)``;

export default InfoCard;
