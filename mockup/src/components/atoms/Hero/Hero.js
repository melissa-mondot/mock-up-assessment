import React from "react";
import styled from "styled-components";

const Hero = ({ children }) => (
  <StyledHero>
    <div className="hero">{children}</div>
  </StyledHero>
);

const StyledHero = styled.div``;

export default Hero;
