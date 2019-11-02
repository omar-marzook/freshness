import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSlider.css";
import HeroSlides from "./HeroSlides";

class HeroSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <HeroSlides />
        <HeroSlides />
        <HeroSlides />
        <HeroSlides />
        <HeroSlides />
      </Slider>
    );
  }
}

export default HeroSlider;
