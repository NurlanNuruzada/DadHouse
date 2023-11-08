import React, { useState, useEffect } from 'react';
import './MainSlider.scss'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import AOS from 'aos'
import "aos/dist/aos.css";
import { slides } from "../../Data/Departments";

const MainSlider = () => {


    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 500,
            delay: 1360,
        });
        AOS.refresh();
    }, [])


    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);


    return (
        <>
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                    >
                        <img id='MainSLiderResponsiveImage' src={slide.image} alt={`Slider ${index + 1}`} />
                        <div id='ResponsiveImgaeDIv' className="text">
                            <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <h3>{slide.type}</h3>
                            <h1>{slide.text}</h1>
                            <button class="buttonSSS">
                                ROOMS & SUITES
                            </button>
                        </div>
                        {/* <div></div> */}
                    </div>
                ))}
                <button className="slider-button" onClick={prevSlide}>Önceki</button>
                <button className="slider-button" onClick={nextSlide}>Sonraki</button>
            </div>
        </>
    )
}

export default MainSlider