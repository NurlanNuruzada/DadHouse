import React from "react";
import "./HotelFacilities.scss";
import Facilities from "./Facilities";
import { facilities } from "../../Data/Departments";

const HotelFacilities = () => {
  return (
    <>
      <div className="HotelFacilities_main">
        <div>
          <h3>OUR SERVICES</h3>
          <h1>DAD Residence Facilities</h1>
          <div className="HotelFacilities_in">
            {facilities.map((factil, index) => (
              <Facilities
                key={index}
                logo={factil.logo}
                name={factil.name}
                about={factil.about}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelFacilities;
