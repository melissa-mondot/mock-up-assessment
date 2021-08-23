import React from "react";
import { Hero, Row } from "../atoms";
import { Banner, IconCard, ImgCard, InfoCard } from "../molecules";
// images
import bannerOne from "../../assets/imgs/banner-1.jpg";
import bannerTwo from "../../assets/imgs/banner-2.jpg";
import imageCardOne from "../../assets/imgs/img-1.jpg";

const Home = () => (
  <div className="home">
    <Hero />
    <Row>
      <InfoCard
        primary
        title={"Lorem Ipsum"}
        text={
          "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat."
        }
        linkText={"> Lorem Ipsum"}
      />
      <ImgCard image={imageCardOne} alt={"Two people rock climbing, while one helps another up"}/>
    </Row>
    <Banner
      right="false"
      image={bannerOne}
      title={"Lorem Ipsum"}
      buttonText={"Button Button"}
    />
    <Row>
      <InfoCard
        title={"Lorem ipsum dolor sit amet"}
        text={
          "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
        }
        linkText={"> Lorem Ipsum"}
      />
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
