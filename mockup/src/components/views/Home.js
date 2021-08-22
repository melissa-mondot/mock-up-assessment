import React from "react";
import { Row } from "../atoms";
import { Banner, IconCard, ImgCard, InfoCard } from "../molecules";

const Home = () => (
  <>
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
