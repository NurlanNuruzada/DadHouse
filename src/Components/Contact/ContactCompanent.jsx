import React from 'react'
import './ContactCompanent.scss'
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaMapMarked } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import FormInput from './FormInput';
import { formValue } from "../../Data/Departments";

const ContactCompanent = () => {
    return (
        <>
            <div className='ContactCompanent_main'>
                <div id="responsiveUcun">
                    <div className='ContactCompanent_contactInfo'>
                        <h1>The Cappa Luxury Hotel</h1>
                        <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                        <div>
                            <div>
                                <div className='ContactCompanent_logo'><BsTelephoneOutbound /></div>
                                <div className='ContactCompanent_text'>
                                    <p>Reservation</p>
                                    <h1>855 515 5533</h1>
                                </div>
                            </div>
                            <div>
                                <div className='ContactCompanent_logo'><SlEnvolopeLetter /></div>
                                <div className='ContactCompanent_text'>
                                    <p>Email Info</p>
                                    <h1>info@luxuryhotel.com</h1>
                                </div>
                            </div>
                            <div>
                                <div className='ContactCompanent_logo'><FaMapMarked /></div>
                                <div className='ContactCompanent_text'>
                                    <p>Address</p>
                                    <h1>1616 Broadway NY, New York 10001United States of America</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ContactCompanent_form'>
                        <h1>Get in touch</h1>
                        <div id='responsiveUcun2'>
                            {formValue.map((value, index) => (
                                < FormInput key={index}  value={value.value}/>
                            ))}
                        </div>
                        <textarea placeholder='Message*' className='ContactCompanent_form_text' />
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCompanent