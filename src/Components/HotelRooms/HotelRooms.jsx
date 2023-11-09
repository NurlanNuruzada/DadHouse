import React from "react";
import "./HotelRooms.scss";
import { Link } from "react-router-dom";
import livingRoom from "../../Images/photo_2022-04-13_17-35-43.jpg";
import kitchen from "../../Images/photo_2022-04-13_17-35-56.jpg";
import kitchen2 from "../../Images/photo_2022-04-13_17-35-53.jpg";

const HotelRooms = () => {
  return (
    <>
      <div className="HotelRooms_main">
        <div>
          <h3>DAD Residence</h3>
          <h1>Gallery</h1>
          <div>
            <div class="HotelRooms_Card">
              <p>
                <span>
                  <img id="HotelRooms_image" src={livingRoom} />
                </span>
              </p>
              <p>
                <span>
                  <img id="HotelRooms_image" src={kitchen} />
                </span>
              </p>
              <p>
                <span>
                  <img id="HotelRooms_image" src={kitchen2} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRooms;
