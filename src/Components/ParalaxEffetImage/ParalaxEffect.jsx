import React from "react";
import Styles from "./ParalaxEffect.module.css";
import styled from "styled-components";

export default function ParalaxEffect({ FirstTitle, SeccondTitle, Image }) {
  const StyledText2 = styled.p`
    font-family: "Barlow Condensed", sans-serif;
  `;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className={Styles.TranparentImageContainer}
      ></div>
      <div className={Styles.ImageTextContainer}>
        <StyledText2 className={Styles.text2}>{FirstTitle}</StyledText2>
        <p className={Styles.text1}>{SeccondTitle}</p>
      </div>
    </div>
  );
}
