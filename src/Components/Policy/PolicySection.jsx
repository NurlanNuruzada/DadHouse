import React from "react";
import Styles from "./PolicySection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
export default function PolicySection() {
  return (
    <div className={Styles.MainContainer}>
      <div>
        <div className={Styles.AboutContainer}>
          <h1 className={Styles.Subtitle}>AN EXPERIENCE FOR THE SENSES</h1>
          <h2 className={Styles.title}>The Restaurant</h2>
          <p className={Styles.Description}>
            Led by Chef de Micheal Martin, The Restaurant is celebrated for its
            excellent cuisine and unique ambience. The gorgeous dining room
            features three open studio kitchens, allowing you to enjoy the
            sights and sounds of the culinary artistry on display. The menu
            showcases both Asian and European influences, with a tempting
            selection of classic favorites and creative dishes for you to
            sample. Cheese connoisseurs will be drawn to the The Wine and Cheese
            Cellar, housed in five-meter-high glass walls, where our
            knowledgeable staff can introduce you to some of New York's greatest
            culinary treasures.
          </p>
        </div>
        <div className={Styles.hours}>
          <h1 className={Styles.HoursTitle}>Hours</h1>
          <ul className={Styles.List}>
            <li className={Styles.ListItem}>
              <FontAwesomeIcon className={Styles.clock} icon={faClock} />
              <p>Breakfast: 9.00 am – 12.00 am (daily)</p>
            </li>
            <li className={Styles.ListItem}>
              <FontAwesomeIcon className={Styles.clock} icon={faClock} />
              <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
            </li>
            <li className={Styles.ListItem}>
              <FontAwesomeIcon className={Styles.clock} icon={faClock} />
              <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
