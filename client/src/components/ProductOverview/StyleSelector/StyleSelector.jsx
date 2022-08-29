import React from "react";

const StyleSelector = ({ styles }) => {
  console.log("this is in styles", styles);
  return <h3 className="item style-selector">Select your style</h3>;
};

export default StyleSelector;
