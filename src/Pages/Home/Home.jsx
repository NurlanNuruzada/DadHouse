import React from 'react'
import MainSlider from "../../Components/MainSlider/MainSlider";
import AboutUsSection from "../../Components/AboutUsSection/AboutUsSection";
import HotelRooms from "../../Components/HotelRooms/HotelRooms";
import SliderSection from "../../Components/SliderSection/SliderSection";
import HotelFacilities from "../../Components/HotelFacilities/HotelFacilities";
import HotelDepartments from "../../Components/HotelDepartments/HotelDepartments";
import Background from "../../Components/ContactBackGround/Background";

export default function Home() {
  return (
    <>
      <MainSlider />
      <AboutUsSection />
      <HotelRooms />
      <SliderSection />
      <HotelFacilities />
      <HotelDepartments />
      <Background />
    </>
  )
}
