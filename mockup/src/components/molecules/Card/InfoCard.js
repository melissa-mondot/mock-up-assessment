import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const InfoCard = ({ title, text, linkText }) => (
  <StyledInfoCard className="info-card">
    <h1>{title}</h1>
    <p>{text}</p>
    {/* TODO: link to should be programmatic  */}
    <NavLink to="/test">
      <small>{linkText}</small>
    </NavLink>

  </StyledInfoCard>
);

const StyledInfoCard = styled.div`
  max-width: 43.75rem;
  width: calc(50% - 23.125rem);
  margin: auto 7.375rem auto 15.75rem;
  h4 {
    color: ${(props) => (props.primary ? props.theme.color.primary : "#000")};
  }
`;

export default InfoCard;
