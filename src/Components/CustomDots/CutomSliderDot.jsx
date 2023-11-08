// CustomDot.js
import React from "react";
import Styles from './CustomSliderDot.module.css';

const CustomDot = ({ active, index, onClick }) => {
  return (
    <button
      className={active ? Styles.active : Styles.Dot}
      onClick={() => onClick(index)}
    ></button>
  );
};

export default CustomDot;
