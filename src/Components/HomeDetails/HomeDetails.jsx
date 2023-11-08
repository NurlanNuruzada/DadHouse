import React, { useState, useEffect } from 'react';
import './HomeDetails.scss'
import { AiTwotoneStar, AiOutlineWifi } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import { GiTowel } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";


const HomeDetails = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: 'https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/1.jpg',
        },
        {
            image: 'https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/2.jpg',
        },
        {
            image: 'https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/5.jpg',
        },
    ];

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
            <div>
                <div className="slider">
                    {slides.map((slide, index) => (
                        <div
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            key={index}
                        >
                            <img src={slide.image} alt={`Slider ${index + 1}`} />
                            <div className="text">
                                {/* {slide.text} */}
                            </div>
                        </div>
                    ))}
                    <button className="slider-button" onClick={prevSlide}>Önceki</button>
                    <button className="slider-button" onClick={nextSlide}>Sonraki</button>
                </div>
            </div>
            <div id='HomeDetails_main'>
                <div id='HomeDetails_main_in'>
                    <div className='HomeDetails_one'>
                        <h6>
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                            <AiTwotoneStar />
                        </h6>
                        <h3>LUXURY HOTEL</h3>
                        <h1>Junior Suite</h1>
                        <div>
                            <p>Hotel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare.</p>
                            <p>Hotel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare.</p>
                        </div>
                        <div className='HomeDetails_Check'>
                            <div>
                                <h1>Check-in</h1>
                                <div>
                                    <HiCheck />
                                    <p>Check-in from 9:00 AM - anytime</p>
                                </div>
                                <div>
                                    <HiCheck />
                                    <p>Early check-in subject to availability</p>
                                </div>
                            </div>
                            <div>
                                <h1>Check-in</h1>
                                <div>
                                    <HiCheck />
                                    <p>Check-out before noon</p>
                                </div>
                                <div>
                                    <HiCheck />
                                    <p>Express check-out</p>
                                </div>
                            </div>
                        </div>

                        <div className='HomeDetails_instructions'>
                            <div>
                                <h1>Special check-in instructions</h1>
                                <p>Guests will receive an email 5 days before arrival with check-in instructions; front desk staff will greet guests on arrival For more details, please contact the property using the information on the booking confirmation.</p>
                            </div>
                            <div>
                                <h1>Pets</h1>
                                <p>Pets not allowed</p>
                            </div>
                            <div>
                                <h1>Children and extra beds</h1>
                                <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $ 10 per day.</p>
                            </div>
                            <div>
                                <button> Hover me
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='HomeDetails_two'>
                        <div>
                            <h1>Amenities</h1>
                            <h2>
                                <BsFillPersonPlusFill />
                                <span>1-2 Persons</span>
                            </h2>
                            <h2>
                                <AiOutlineWifi />
                                <span>Free Wifi</span>
                            </h2>
                            <h2>
                                <TbClockHour3 />
                                <span>200 sqft room</span>
                            </h2>
                            <h2>
                                <MdOutlineFreeBreakfast />
                                <span>Breakfast</span>
                            </h2>
                            <h2>
                                <GiTowel />
                                <span>Towels</span>
                            </h2>
                            <h2>
                                <FaSwimmingPool />
                                <span>Swimming Pool</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDetails