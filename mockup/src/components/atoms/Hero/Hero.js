import React from "react";
import styled from "styled-components";
import Button from "../Button";
// images
import hero from "../../../assets/imgs/hero.jpg";
import { welcome } from "../../../assets/icons";

const Hero = () => (
  <StyledHero className="hero">
    <div className="background" />
    <div className="welcome">
      <div className="welcome-text">
        {/* TODO: Replace with react-spring */}
        <img
          className="animate__animated animate__slideInDown animate__delay-1s"
          src={welcome}
          alt="Welcome To written in strikeout"
        />
        <h2>Rooster Grin</h2>
        {/* TODO: link button to test */}
        <Button>Button Button</Button>
      </div>
    </div>
  </StyledHero>
);

const StyledHero = styled.div`
  height: 43.75rem;
  position: relative;
  text-align: center;
  .background {
    background: center / cover no-repeat url(${hero});
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
    .welcome-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        color: #ffffff;
        font-size: 4rem;
        letter-spacing: 0.5rem;
        margin: auto;
      }
    }
  }
`;

export default Hero;
