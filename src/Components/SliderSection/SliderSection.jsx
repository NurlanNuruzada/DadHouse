import React from 'react'
import Styles from './SliderSection.module.css'
import PhoneIcon from '../../Images/phone-call.png'
import SynchronizedSlider from '../../Components/CaruselSliderSlick/caruselSlider';

export default function SliderSection() {
    return (
        <div className={Styles.Section3Container}>
            <div className={Styles.LeftSideContainer}>
                <span className={Styles.Section3Title1}>Best Prices</span>
                <br />
                <span className={Styles.Section3Title2}>Extra Service</span>
                <p className={Styles.Section3Description}>The best prices for your relaxing vacation. The utanislen
                    quam nestibulum ac quame odion
                    elementum sceisue the aucan.
                </p>
                <p className={Styles.Section3Description}>The best prices for your relaxing vacation. The utanislen
                    quam nestibulum ac quame odion
                    elementum sceisue the aucan.
                </p>
                <div className={Styles.PhoneNumberContainer}>
                    <img className={Styles.PhoneIcon} src={PhoneIcon} alt="" />
                    <div>
                        <h7 style={{ color: "#adadad" }} className={Styles.PhoneNumberText}>For information</h7>
                        <p className={Styles.PhoneNumber}> +994 (70) 123 45 67</p>
                    </div>
                </div>
            </div>
            <div className={Styles.RightSideContainer}>
                <SynchronizedSlider />
            </div>
        </div>
    )
}
