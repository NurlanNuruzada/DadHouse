import React from 'react'
import Styles from './AboutUsSection.module.css'
import HotelImage from '../../Images/2.jpg'
import HotelImage2 from '../../Images/8.jpg'
import PhoneIcon from '../../Images/phone-call.png'

export default function AboutUsSection() {
    return (
        <div className={Styles.Section2Container}>
            <div className={Styles.Section2Left}>
                <p className={Styles.firstTitle}>THE CAPPA LUXURY HOTEL</p>
                <h7 className={Styles.SeccondTitle}>Enjoy a Luxury</h7>
                <br />
                <h7 className={Styles.SeccondTitle}>Experience</h7>
                <p className={Styles.Description}>Welcome to the best five-star deluxe hotel in New York.
                    Hotel elementum sesue the aucan vestibulum aliquam justo in
                    sapien rutrum volutpat. Donec in quis the pellentesque velit.
                    Orci varius natoque penatibus et
                    magnis dis parturient monte
                    nascete ridiculus mus nellentesque habitant morbine.</p>
                <p className={Styles.Description}>Welcome to the best five-star deluxe hotel in New York.
                    Hotel elementum sesue the aucan vestibulum aliquam justo in
                    sapien rutrum volutpat. Donec in quis the pellentesque velit.

                    nascete ridiculus mus nellentesque habitant morbine.</p>
                <div className={Styles.PhoneNumberContainer}>
                    <img className={Styles.PhoneIcon} src={PhoneIcon} alt="" />
                    <div>
                        <h7 className={Styles.PhoneNumberText}>Reservation</h7>
                        <p className={Styles.PhoneNumber}> +994 (70) 123 45 67</p>
                    </div>
                </div>
            </div>
            <div className={Styles.Section2Right}>
                <img className={Styles.Section2Image1} src={HotelImage2} alt="" />
                <img className={Styles.Section2Image2} src={HotelImage} alt="" />
            </div>
        </div>
    )
}
