import React, { useState } from "react";
import Slider from "react-slick";
import Style from "./caruselSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../CaruselSliderCard/Card";
import Image from "../../Images/Service1.jpg";
import Image2 from "../../Images/Service2.jpg";
import Image3 from "../../Images/Service3.jpg";
import Image4 from "../../Images/Service4.jpg";
import CustomDot from "../CustomDots/CutomSliderDot";

const SynchronizedSlider = () => {
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
    draggable: true,
    slidesToShow: 2,
    beforeChange: (current, next) => {
      setActiveDot(next);
    },
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1980, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },

    ],
  };

  const handleDotClick = (index) => {
    setActiveDot(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={Style.SliderConatiner}>
      <Slider ref={sliderRef} {...settings} className={`${Style.CustomSlider} slick-slider`}>
        <Card Image={Image} Price={34} Title={"Drinks Included"} />
        <Card Image={Image2} Price={15} Title={"Room Cleaning"} />
        <Card Image={Image3} Price={24} Title={"Room Breakfast"} />
        <Card Image={Image4} Price={24} Title={"Room Breakfast"} />
      </Slider>
      <div className={Style.CustomDots}>
        {Array.from({ length: 4 }).map((_, index) => (
          <CustomDot
            key={index}
            active={index === activeDot}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SynchronizedSlider;
