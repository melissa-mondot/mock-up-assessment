import React from "react";
import { Hero, Row } from "../atoms";
import { Banner, IconCard, ImgCard, InfoCard } from "../molecules";
// images
import bannerOne from "../../assets/imgs/banner-1.jpg";
import bannerTwo from "../../assets/imgs/banner-2.jpg";

const Home = () => (
  <div className="home">
    <Hero />
    <Row>
      <InfoCard />
      <ImgCard />
    </Row>
    <Banner
    right="false"
      image={bannerOne}
      title={"Lorem Ipsum"}
      buttonText={"Button Button"}
    />
    <Row>
      <InfoCard />
      <IconCard />
    </Row>
    <Banner
      right="true"
      image={bannerTwo}
      title={"Lorem Ipsum"}
      text={
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
      }
      buttonText={"Button Button"}
    />
    <Row>carousel</Row>
  </div>
);

export default Home;
