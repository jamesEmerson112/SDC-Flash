import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import MainPic from "./MainPic.jsx";

const ImageGallery = ({ styles }) => {
  // console.log(styles)
  if (styles) {
    const photos = styles[1].photos;

    return (
      <div>
        <div className="main-pic">
          <MainPic photos={photos} />
        </div>
        <div className="item image-gallery">
          <Thumbnail photos={photos} />
        </div>
      </div>
    );
  }

  //let image = props.styles[0].photos[0]
};

export default ImageGallery;
