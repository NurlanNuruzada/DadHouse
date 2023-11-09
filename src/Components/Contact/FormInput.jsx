import React, { useRef } from "react";
import "./FormInput.scss";
import emailjs from "@emailjs/browser";

const FormInput = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="input-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name="user_name" className="input-field" />
            <label className="input-label">Name*</label>
            <div className="input-highlight"></div>
          </div>
          <div className="input-wrapper">
            <textarea name="subject" className="input-field"></textarea>
            <label className="input-label">Subject*</label>
            <div className="input-highlight"></div>
          </div>

          <div className="input-wrapper">
            <input type="email" name="user_email" className="input-field" />
            <label className="input-label">Email*</label>
            <div className="input-highlight"></div>
          </div>
          <div className="input-wrapper">
            <textarea name="user_number" className="input-field"></textarea>
            <label className="input-label">Number*</label>
            <div className="input-highlight"></div>
          </div>

          <div className="input-wrapper">
            <textarea name="message" className="input-field"></textarea>
            <label className="input-label">Message*</label>
            <div className="input-highlight"></div>
          </div>

          <input className="send-btn" type="submit" value="Send Message" />
        </form>
      </div>
    </>
  );
};

export default FormInput;
