import React from 'react'
import Styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { BsFillTelephoneOutboundFill, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={Styles.Footer_main}>
        <div className={Styles.footer}>
          <div className={Styles.footer_AboutHotel}>
            <h2>About Hotel</h2>

            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
            </h4>

            <div className={Styles.pastebutton}>
              <button className={Styles.button}>Language &nbsp; ▼</button>
              <div className={Styles.dropdowncontent}>
                <a id={Styles.top} href="#">English</a>
                <a id={Styles.middle} href="#">Azerbayjan</a>
                <a id={Styles.bottom} href="#">Turksih</a>
              </div>
            </div>

          </div>
          <div className={Styles.footer_Explore}>
            <h2>Explore</h2>
            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <ul>
                <li><Link>Home</Link></li>
                <li><Link>About</Link></li>
                <li><Link>Rooms & Suites</Link></li>
                <li><Link>Restuarant</Link></li>
                <li><Link>Contact</Link></li>
              </ul>
            </h4>

          </div>
          <div className={Styles.footer_Contact}>
            <h2>Contact</h2>
            <h4 style={{ marginTop: "40px" }} className={Styles.footercenter}>
              <p>1616 Broadway NY, New York 10001
                United States of America</p>
              <h3><BsFillTelephoneOutboundFill /> 855 100 4444</h3>
              <h3 className={Styles.footer_Email}>info@luxuryhotel.com</h3>
              <h6>
                <BsInstagram /><AiOutlineTwitter /><AiOutlineYoutube /><FaFacebookF />
              </h6>
            </h4>
          </div>
        </div>
      </div>

      <div className={Styles.Footer_End}>
        <p>© Copyright 2023 by DuruThemes.com</p>
      </div>
    </>
  )
}
