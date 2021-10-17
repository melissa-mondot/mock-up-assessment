import React from "react";
import Carousel from "react-bootstrap/Carousel";

const TextCarousel = ({ items }) => {
  // console.log(items);
  const slides = items.map((key, item) => (
    <Carousel.Item key={key}>
      <h3 className="d-block w-100">
        <b>{items[item][0]}</b>
      </h3>
      <p>~ {items[item][1]}</p>
    </Carousel.Item>
  ));
  return (
    <>
      <h4 className="pt-3">What some of our clients are saying:</h4>
      <Carousel className="text-carousel my-3 px-2" variant="dark">
        {slides}
      </Carousel>
    </>
  );
};

export default TextCarousel;
