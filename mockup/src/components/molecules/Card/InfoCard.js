import React from "react";
import styled from "styled-components";

const InfoCard = ({ title, text, linkText }) => (
  <StyledInfoCard className="info-card">
    <h1>{title}</h1>
    <p>{text}</p>
    {/* TODO: link to test page */}
    {/* <a> */}
    <small>{linkText}</small>
    {/* </a> */}
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
