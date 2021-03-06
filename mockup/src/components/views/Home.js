import React from "react";
import { Banner, Hero, TextCarousel } from "../molecules";
import { InfoOne, InfoTwo } from "../organisms";
// images
import heroImage from "../../assets/imgs/hero.jpg";
import bannerOne from "../../assets/imgs/banner-1.jpg";
import bannerTwo from "../../assets/imgs/banner-2.jpg";
import imageCardOne from "../../assets/imgs/img-1.jpg";
import { expertise, hygiene, lab, retention } from "../../assets/icons/index";
const icons = [
  [expertise, "expertise"],
  [hygiene, "hygiene"],
  [lab, "lab"],
  [retention, "retention"],
];
const reviews = [
  ["Neque in odio vel, sit lobortis erat.", "Fugit Quam"],
  ["Quam in ac quam. Duis et, non arcu imperdiet.", "Fugit Quam"],
  ["Condimentum non aliquet sed, quisque risus vitae semper.", "Fugit Quam"],
  ["Lorem ipsum dolor sit amet.", "Fugit Quam"],
];

const Home = () => (
  <div className="home m-0 p-0">
    <Hero src={heroImage} />
    <InfoOne
      title={"Lorem Ipsum"}
      text={
        "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat."
      }
      linkText={"> Lorem Ipsum"}
      image={imageCardOne}
      alt={"Two people rock climbing, while one helps another up"}
    />
    <Banner
      src={bannerOne}
      text={"Duis nisl magna est sociis."}
      btnTxt={"Sig Almet"}
    />
    <InfoTwo
      title={"Lorem ipsum dolor sit amet"}
      text={
        "Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula."
      }
      linkText={"> Lorem Ipsum"}
      icons={icons}
    />
    <Banner
      right
      src={bannerTwo}
      title={"Odio Vel"}
      text={
        "Lectus urna duis convallis convallis tellus id interdum velit laoreet."
      }
      btnTxt={"Uis nisl"}
    />
    <TextCarousel items={reviews} />
  </div>
);

export default Home;
