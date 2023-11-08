import React, { useEffect } from 'react'
import './Departments.scss'
import AOS from 'aos'
import "aos/dist/aos.css";


const Departments = (props) => {


    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 500,
            delay: 1360,
        });
        AOS.refresh();
    }, [])

    const orderInfo = props.order % 2 == 0

    return (
        <>
            <div className='Departments_main'>
                <div id='responsiveImageDepar' style={orderInfo ? { order: "1" } : {}} data-aos="fade-right" className='Departments_Image'>
                    <img src={props.image} />
                </div>
                <div data-aos="fade-left" className='Departments_About'>
                    <div>
                        <h3>{props.type}</h3>
                        <h1>{props.name}</h1>
                        <p>{props.about}</p>
                        <button class="cta">
                            <span>LEARN MORE</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departments