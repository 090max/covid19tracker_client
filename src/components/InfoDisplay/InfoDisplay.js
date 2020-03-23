import React from "react";

import "./InfoDisplay.css";
const InfoDisplay = ({ type, info }) => {
  return (
    <div className="outer">
      <div className="info">{type}</div>
      <div className="value">{info}</div>
    </div>
  );
};

export default InfoDisplay;
