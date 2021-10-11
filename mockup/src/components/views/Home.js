import React from "react";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import { Banner, Hero, IconCard, ImgCard, InfoCard } from "../molecules";
// images
import heroImage from "../../assets/imgs/hero.jpg";
import bannerOne from "../../assets/imgs/banner-1.jpg";
import bannerTwo from "../../assets/imgs/banner-2.jpg";
import imageCardOne from "../../assets/imgs/img-1.jpg";

const Home = () => (
  <Container fluid className="home">
    <Hero src={heroImage} />
    <CardGroup className="info-1">
      <InfoCard

        title={"Lorem Ipsum"}
        text={
          "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat."
        }
        linkText={"> Lorem Ipsum"}
      />
      <ImgCard
        image={imageCardOne}
        alt={"Two people rock climbing, while one helps another up"}
      />
    </CardGroup>
    <Banner src={bannerOne} text={"Duis nisl magna est sociis."} btnTxt={"Sig Almet"} />
    <CardGroup className="info-2">
      <InfoCard title={"Lorem ipsum dolor sit amet"}
        text={
          "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
        }
        linkText={"> Lorem Ipsum"} />
      <IconCard />
    </CardGroup>
    <Banner right src={bannerTwo}
      title={"Odio Vel"}
      text={
        "Lectus urna duis convallis convallis tellus id interdum velit laoreet."
      }
      btnTxt={"Uis nisl"} />
  </Container>
);

export default Home;
