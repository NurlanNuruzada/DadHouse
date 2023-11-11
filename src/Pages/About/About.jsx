import React from 'react';
import Styles from './About.module.css';
import { useSnapCarousel } from 'react-snap-carousel';
import ParalaxEffect from '../../Components/ParalaxEffetImage/ParalaxEffect';
import AboutUsSection from '../../Components/AboutUsSection/AboutUsSection';
import SliderSection from '../../Components/SliderSection/SliderSection';
import PolicySection from '../../Components/Policy/PolicySection';
import HotelFacilities from "../../Components/HotelFacilities/HotelFacilities";
import image from './../../Images/1.jpg'

export default function About() {
    const { scrollRef } = useSnapCarousel();
    return (
        <>
            <div className={Styles.MainContainer}>
                {/* Section 1 */}
                <ParalaxEffect Image={image} FirstTitle={"LUXURY HOTEL"} SeccondTitle={"About Us"} />
                {/* section 2 */}
                <AboutUsSection />
                {/* section 3 */}
                <SliderSection />
                <HotelFacilities />
            </div>
        </>
    );
}
