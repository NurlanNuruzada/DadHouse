import React from 'react';
import Styles from './Background.module.css';
import PhoneIcon from '../../Images/phone.png';
import BackGroundImage from '../../Images/SliderImage.jpg';
import BookingForm from '../../Components/BookingForm/BookingForm';
import { ChakraProvider } from '@chakra-ui/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Background() {
    return (
        <div className={Styles.Container}>
            <div className={Styles.BackGround}></div>
            <div className={Styles.MainContainer}>
                <div className={Styles.LeftSide}>
                    <h1 className={Styles.text}>Each of our guest rooms feature a private bath, Wi-Fi,
                        cable television, and include a full breakfast.</h1>
                    <div className={Styles.PhoneNumberContainer}>
                        <img className={Styles.PhoneIcon} src={PhoneIcon} alt="" />
                        <div>
                            <h7 className={Styles.PhoneNumberText}>Reservation</h7>
                            <p className={Styles.PhoneNumber}>+994 (70) 123 45 67</p>
                        </div>
                    </div>
                    <div className={Styles.Section3Text}>
                        <FontAwesomeIcon className={Styles.CheckIcon} color='white' icon={faCheck} />
                        <p className={Styles.MiniText}>Call us, it's toll-free.</p>
                    </div>
                </div>
                <ChakraProvider>
                    <BookingForm />
                </ChakraProvider>
            </div>
        </div>
    );
}
