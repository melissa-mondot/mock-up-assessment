import React from "react";
import styled from "styled-components";
import Row from "../../atoms/Row";

const Banner = ({ ...props }) => (
  <StyledBanner>
    <div className="banner">This is a banner</div>
  </StyledBanner>
);

const StyledBanner = styled(Row)``;

export default Banner;
