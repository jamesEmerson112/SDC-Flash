import React from "react";
import Thumbnail from "../ImageGallery/Thumbnail.jsx";

const StyleSelector = ({ styles }) => {
  // Create variable to hold specific photos for style
  let stylePhotos = [];
  for (let i = 0; i < styles.length; i++) {
    // get the first picture for each style que and creat thumbnail
    stylePhotos.push(styles[i].photos[0]);
  }
  //create a variable to group them into four
  let groupedStylePhotos = [];
  let groupOfFour = Math.floor(stylePhotos.length / 4);
  for (let i = 0; i < groupOfFour; i++) {
    groupedStylePhotos.push(stylePhotos.splice(0, 4));
  }
  // if there are any photos not grouped in four add it to the grouped photos
  if (stylePhotos.length > 0) {
    groupedStylePhotos.push(stylePhotos.splice(0, stylePhotos.length));
  }
  // create broken down components each holding four thumbnails
  let styleList = groupedStylePhotos.map((photos, i) => {
    return (
      <div className="styles" key={i}>
        <Thumbnail photos={photos} />
      </div>
    );
  });
  console.log(styleList);
  return (
    <div className="item style-selector">
      <div>{styleList}</div>
    </div>
  );
};

export default StyleSelector;
