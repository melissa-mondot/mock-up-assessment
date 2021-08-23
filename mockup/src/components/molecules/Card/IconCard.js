import React from "react";
import styled from "styled-components";
// icons
import { expertise, hygiene, lab, retention } from "../../../assets/icons";

const IconCard = ({ ...props }) => (
  <StyledIconCard>
    <div>
      <img src={expertise} alt="expertise" />
      <img src={hygiene} alt="hygiene" />
      <img src={lab} alt="lab" />
      <img src={retention} alt="retention" />
    </div>
  </StyledIconCard>
);

const StyledIconCard = styled.div`
  max-width: 43.75rem;
  width: 45%;
  height: 37.5rem;
  div {
    padding-top: 8.1125rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    img {
      max-height: 6.1625rem;
    }
  }
`;

export default IconCard;
