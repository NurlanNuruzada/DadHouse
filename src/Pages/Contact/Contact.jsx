import React from 'react'
import ParalaxEffect from "../../Components/ParalaxEffetImage/ParalaxEffect";
import Background from '../../Components/ContactBackGround/Background'
import Images from '../../Images/Service1.jpg';
import Contact2 from "../../Components/Contact/Contact";


export default function Contact() {
  return (
    <div>
      <ParalaxEffect Image={Images} />
      <Contact2 />
      <Background />
    </div>
  )
}
// FirstTitle={"GET IN TOUCH"} SeccondTitle={"Contact Us"}