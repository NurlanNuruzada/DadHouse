import React from 'react'
import './HotelDepartments.scss'
import Departments from './Departments'
import { departmentsData } from "../../Data/Departments";

const HotelDepartments = () => {
    return (
        <>
            <div className='HotelDepartments_main'>
                <div>
                    {departmentsData.map((deparment, index) => (
                        <Departments key={index} order={index+1} image={deparment.image} type={deparment.type} name={deparment.name} about={deparment.about} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HotelDepartments