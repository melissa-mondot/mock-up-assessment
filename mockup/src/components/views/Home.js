import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import { Banner, Hero, IconCard, ImgCard, InfoCard } from "../molecules";
// images
import heroImage from "../../assets/imgs/hero.jpg";
// import bannerOne from "../../assets/imgs/banner-1.jpg";
// import bannerTwo from "../../assets/imgs/banner-2.jpg";
import imageCardOne from "../../assets/imgs/img-1.jpg";

const Home = () => (
  <Container fluid className="home">
    <Hero src={heroImage} />
    <Row className="no-gutters">
      <CardGroup>
        <InfoCard
          primary
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
    </Row>
  </Container>
);

export default Home;
