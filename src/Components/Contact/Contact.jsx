import React from 'react'
import './Contact.scss'
import ContactCompanent from './ContactCompanent'

export default function Contact() {
  return (
    <>
    
      <div>
        <ContactCompanent />
      </div>
      <div className='Hotel_Location'>
        <div className='Hotel_Location_desk'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.460707792144!2d48.769273711927255!3d38.753135971637384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4022ffd85570ac0b%3A0x47b6fd2ebe334f91!2sDAD%20house%20Lankaran!5e0!3m2!1sen!2saz!4v1699314708261!5m2!1sen!2saz"
            width="1150"
            height="650"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='responsive_Phone_Location'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.460707792144!2d48.769273711927255!3d38.753135971637384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4022ffd85570ac0b%3A0x47b6fd2ebe334f91!2sDAD%20house%20Lankaran!5e0!3m2!1sen!2saz!4v1699314708261!5m2!1sen!2saz"
            width="340"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  )
}
