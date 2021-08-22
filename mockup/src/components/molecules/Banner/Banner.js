import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms";

const Banner = ({ title, buttonText, image, text, right }) => {
  console.log(right);
  return (
    <StyledBanner image={image} right={right}>
      <div className="banner-info" >
        <h4>{title}</h4>
        <p>{text}</p>
        <Button secondary>{buttonText}</Button>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  background-image: url(${(props) => props.image});
  height: 37.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  .banner-info {
    position: absolute;
    top: 15.125rem;
    left: ${(props) => (props.right === "true" ? "50rem" : "15.75rem;")};
    h4 {
      white-space: nowrap;
      text-transform: uppercase;
      padding-bottom: 0.25rem;
    }
    h4,
    p {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0.5rem;
      max-width: ${(props) => (props.right === "true" ? "60%" : "50%")};
    }
  }
`;

export default Banner;
