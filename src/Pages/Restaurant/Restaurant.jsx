import React, { useState, useEffect } from "react";
import "./Restaurant.scss";
import PolicySection from "../../Components/Policy/PolicySection";

const Restaurant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/1.jpg",
    },
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/2.jpg",
    },
    {
      image:
        "https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/5.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <div>
        <div className="slider111">
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === currentSlide ? "active" : ""}`}
              key={index}
            >
              <img src={slide.image} alt={`Slider ${index + 1}`} />
              <div className="text">{/* {slide.text} */}</div>
            </div>
          ))}
          <button className="slider-button" onClick={prevSlide}>
            Önceki
          </button>
          <button className="slider-button" onClick={nextSlide}>
            Sonraki
          </button>
        </div>
      </div>
      <div>
        <PolicySection />
      </div>
    </>
  );
};

export default Restaurant;
