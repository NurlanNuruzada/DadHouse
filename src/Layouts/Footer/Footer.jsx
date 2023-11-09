import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFillTelephoneOutboundFill, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className={Styles.Footer_main}>
        <div className={Styles.footer}>
          <div className={Styles.footer_AboutHotel}>
            <h2>About DAD Residence</h2>

            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <p>
                Our mission is to provide an unforgettable experience for our
                guests, offering a serene getaway from the bustling city life.
                Immerse yourself in tranquility as you escape to DAD Residence.
              </p>
            </h4>

            <div className={Styles.pastebutton}>
              <button className={Styles.button}>Language &nbsp; ▼</button>
              <div className={Styles.dropdowncontent}>
                <button
                  id={Styles.middle}
                  onClick={() => handleChangeLanguage("az")}
                  href="#"
                >
                  Azerbaijan
                </button>
                <button
                  id={Styles.top}
                  onClick={() => handleChangeLanguage("en")}
                  href="#"
                >
                  English
                </button>
                <button
                  id={Styles.bottom}
                  onClick={() => handleChangeLanguage("ru")}
                  href="#"
                >
                  Russian
                </button>
              </div>
            </div>
          </div>
          <div className={Styles.footer_Explore}>
            <h2>Explore</h2>
            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Rooms & Suites</Link>
                </li>
                <li>
                  <Link>Restaurant</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </h4>
          </div>
          <div className={Styles.footer_Contact}>
            <h2>Contact</h2>
            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <p>Haftoni Settlement, Lankaran Azerbaijan</p>
              <h3>
                <BsFillTelephoneOutboundFill /> +994102122424
              </h3>
              <h3 className={Styles.footer_Email}>info@luxuryhotel.com</h3>
              <h6>
                <BsInstagram />
                <AiOutlineTwitter />
                <AiOutlineYoutube />
                <FaFacebookF />
              </h6>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
