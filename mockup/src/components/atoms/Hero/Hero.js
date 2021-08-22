import React from "react";
import styled from "styled-components";
import heroImg from "../../../assets/imgs/hero.jpg";
import welcome from "../../../assets/icons/welcome.svg";

const Hero = () => (
  <StyledHero className="hero">
    <div className="background" />
    <div className="welcome">
      <img src={welcome} alt="Welcome To written in strikeout" />
      <h2>Rooster Grin</h2>
    </div>
  </StyledHero>
);

const StyledHero = styled.div`
  height: 43.75rem;
  position: relative;
  text-align: center;
  .background {
    background: center / cover no-repeat url(${heroImg});
    height: 100%;
    margin: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .welcome {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      height: 5rem;
    }
    h2 {
      color: #ffffff;
      font-size: 4.33rem;
      letter-spacing: 0.5rem;
      margin: 0;
    }
  }
`;

export default Hero;
