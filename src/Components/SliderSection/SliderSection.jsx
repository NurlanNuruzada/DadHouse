import React from "react";
import Styles from "./SliderSection.module.css";
import PhoneIcon from "../../Images/phone-call.png";
import SynchronizedSlider from "../../Components/CaruselSliderSlick/caruselSlider";

export default function SliderSection({ height }) {
  return (
    <div style={{ height: height }} className={Styles.Section3Container}>
      <div className={Styles.LeftSideContainer}>
        <span className={Styles.Section3Title1}>Best Prices</span>
        <br />
        <span className={Styles.Section3Title2}>Extra Service</span>
        <p className={Styles.Section3Description}>
          Enhance your stay with our affordable extra services designed to make
          your experience even more enjoyable. From thoughtful amenities to
          convenient perks.
        </p>
        <p className={Styles.Section3Description}>
          Discover the little extras that add a touch of comfort to your
          stay—because you deserve it. Our supplementary services are here to
          make your time with us extra special.
        </p>
        <div className={Styles.PhoneNumberContainer}>
          <img className={Styles.PhoneIcon} src={PhoneIcon} alt="" />
          <div>
            <h7 style={{ color: "#adadad" }} className={Styles.PhoneNumberText}>
              For information
            </h7>
            <p className={Styles.PhoneNumber}> +994 (10) 212 24 24</p>
          </div>
        </div>
      </div>
      <div className={Styles.RightSideContainer}>
        <SynchronizedSlider />
      </div>
    </div>
  );
}
