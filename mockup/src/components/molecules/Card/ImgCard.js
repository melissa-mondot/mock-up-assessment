import React from "react";
import styled from "styled-components";
import Col from "../../atoms/Col";

const ImgCard = ({ ...props }) => (
  <StyledCard>
    <div className="card">This is an image card</div>
  </StyledCard>
);

const StyledCard = styled(Col)``;

export default ImgCard;