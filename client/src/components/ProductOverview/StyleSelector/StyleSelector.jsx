import React from "react";
import Style from "./Style.jsx";
import styled from "styled-components";

const StyleSelector = ({ styles, choseStyle }) => {
  // Create variable to hold specific photos for style
  let stylePhotos = [];
  for (let i = 0; i < styles.length; i++) {
    // get the first picture for each style que and creat thumbnail
    let style = {};
    style["style_id"] = styles[i].style_id;
    style["name"] = styles[i].name;
    style["photo"] = styles[i].photos[0];
    stylePhotos.push(style);
  }

  console.log(styles);

  return (
    <div className="item style-selector">
      <Style photos={stylePhotos} click={choseStyle} />
    </div>
  );
};

export default StyleSelector;
