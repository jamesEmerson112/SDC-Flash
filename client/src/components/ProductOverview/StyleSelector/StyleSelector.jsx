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
    style["photo"] = styles[i].photos[0];
    stylePhotos.push(style);
  }
  //create a variable to group them into four
  // let groupedStylePhotos = [];
  // let groupOfFour = Math.floor(stylePhotos.length / 4);
  // for (let i = 0; i < groupOfFour; i++) {
  //   groupedStylePhotos.push(stylePhotos.splice(0, 4));
  // }
  // // if there are any photos not grouped in four add it to the grouped photos
  // if (stylePhotos.length > 0) {
  //   groupedStylePhotos.push(stylePhotos.splice(0, stylePhotos.length));
  // }
  // // create broken down components each holding four thumbnails
  // let styleList = groupedStylePhotos.map((photos, i) => {
  //   return (
  //     <div className="styles" key={i}>
  //       <Style click={choseStyle} photos={photos} />
  //     </div>
  //   );
  // });
  // let styleList = stylePhotos.map((photos, i) => {
  //   return (
  //     <div className="styles" key={i}>
  //       <Style click={choseStyle} photos={photos} />
  //     </div>
  //   );
  // });

  //console.log(styleList);

  // create a counter
  // iterate over the style list

  return (
    <div className="item style-selector">
      <Style photos={stylePhotos} click={choseStyle} />
    </div>
  );
};

export default StyleSelector;
