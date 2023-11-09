import React, { useEffect } from "react";
import "./Facilities.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const Facilities = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 500,
      delay: 1360,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="Facilities_Card">
        <div>
          <div className="Facilities_logo">{props.logo}</div>
          <h1>{props.name}</h1>
          <p>{props.about}</p>
        </div>
      </div>
    </>
  );
};

export default Facilities;
