import React from "react";
import { Hero, Row } from "../atoms";
import { Banner, IconCard, ImgCard, InfoCard } from "../molecules";

const Home = () => (
  <>
  <Hero />
    <Row>
      <InfoCard />
      <ImgCard />
    </Row>
    <Banner />
    <Row>
      <InfoCard />
      <IconCard />
    </Row>
    <Banner />
    <Row>carousel</Row>
  </>
);

export default Home;
