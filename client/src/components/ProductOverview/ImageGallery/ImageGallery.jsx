import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import MainPic from "./MainPic.jsx";

const ImageGallery = ({ styles }) => {
  // console.log(styles, "in image");
  if (styles) {
    const photos = styles[1].photos;
    const mainPic = photos[0].url;
    console.log(mainPic);

    return (
      <div className="image-gallery">
        <div className="thumbnails">
          <Thumbnail photos={photos} />
        </div>
        <div className="main-pic">
          <MainPic mainPic={mainPic} />
        </div>
      </div>
    );
  }

  //let image = props.styles[0].photos[0]
};

export default ImageGallery;
