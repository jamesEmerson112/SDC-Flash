import React from "react";
import Thumbnail from "../ImageGallery/Thumbnail.jsx";

const StyleSelector = ({ styles }) => {
  // iterate over the array of styles
  let stylePhotos = [];
  for (let i = 0; i < styles.length; i++) {
    // get the first picture for each style que and creat thumbnail
    groupFour.push(styles[i].photos[0]);
  }
  console.log(stylePhotos);
  return (
    <div className="item style-selector">
      <div className="styles">
        <Thumbnail photos={stylePhotos} />
      </div>
    </div>
  );
};

export default StyleSelector;
