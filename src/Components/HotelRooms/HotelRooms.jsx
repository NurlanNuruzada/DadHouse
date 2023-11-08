import React from 'react'
import './HotelRooms.scss'
import { Link } from 'react-router-dom'

const HotelRooms = () => {
    return (
        <>
            <div className='HotelRooms_main'>
                <div>
                    <h3>THE CAPPA LUXURY HOTEL</h3>
                    <h1>Rooms & Suites</h1>
                    <div>
                        <div class="HotelRooms_Card">
                            <p><span><img id='HotelRooms_image' src='https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/7.jpg' /></span></p>
                            <p><span><img id='HotelRooms_image' src='https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/4.jpg' /></span></p>
                            <p><span><img id='HotelRooms_image' src='https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/7.jpg' /></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelRooms