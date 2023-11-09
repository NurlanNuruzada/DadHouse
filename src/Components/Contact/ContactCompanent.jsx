import React from "react";
import "./ContactCompanent.scss";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaMapMarked } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import FormInput from "./FormInput";
import { formValue } from "../../Data/Departments";

const ContactCompanent = () => {
  return (
    <>
      <div className="ContactCompanent_main">
        <div id="responsiveUcun">
          <div className="ContactCompanent_contactInfo">
            <h1>DAD Residence</h1>
            <p>
              Our mission is to provide an unforgettable experience for our
              guests, offering a serene getaway from the bustling city life.
              Immerse yourself in tranquility as you escape to DAD Residence.
            </p>
            <div>
              <div>
                <div className="ContactCompanent_logo">
                  <BsTelephoneOutbound />
                </div>
                <div className="ContactCompanent_text">
                  <p>Reservation</p>
                  <h1>(010) 212 2424 </h1>
                </div>
              </div>
              <div>
                <div className="ContactCompanent_logo">
                  <SlEnvolopeLetter />
                </div>
                <div className="ContactCompanent_text">
                  <p>Email Info</p>
                  <h1>info@luxuryhotel.com</h1>
                </div>
              </div>
              <div>
                <div className="ContactCompanent_logo">
                  <FaMapMarked />
                </div>
                <div className="ContactCompanent_text">
                  <p>Address</p>
                  <h1>Haftoni Settlement, Lankaran Azerbaijan</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="ContactCompanent_form">
            <h1>Get in touch</h1>
            <div id="responsiveUcun2">
              {formValue.map((value, index) => (
                <FormInput key={index} value={value.value} />
              ))}
            </div>
            <textarea
              placeholder="Message*"
              className="ContactCompanent_form_text"
            />
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCompanent;
