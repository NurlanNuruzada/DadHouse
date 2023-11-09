import React from "react";
import "./RoomSutuies.scss";
import HomeDetails from "../../Components/HomeDetails/HomeDetails";
import SliderSection from "../../Components/SliderSection/SliderSection";
import Background from "../../Components/ContactBackGround/Background";

const RoomSutuies = () => {
  return (
    <>
      <HomeDetails />
      <SliderSection height={"max-content"} />
      <Background />
    </>
  );
};

export default RoomSutuies;
