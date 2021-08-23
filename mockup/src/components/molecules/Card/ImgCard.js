import React from "react";
import styled from "styled-components";

const ImgCard = ({ image, alt }) => (
  <StyledCard image={image}>
    <div className="img-card">
      <p>{alt}</p>
    </div>
  </StyledCard>
);

const StyledCard = styled.div`
  position: relative;
  max-width: 43.75rem;
  width: 50%;
  height: 32.875rem;
  div.img-card {
    background: center / cover no-repeat url(${(props) => props.image});
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    p {
      transform: translateX(-2000px);
    }
  }
`;

export default ImgCard;
