import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";

const ImageGallery = ({ style, mainPic, click }) => {
  // console.log(styles, "in image");

  if (style) {
    const photos = style.photos;

    return (
      <div className="image-gallery">
        <div className="thumbnails">
          <Thumbnail photos={photos} click={click} />
        </div>
        <img className="pic" src={mainPic} />
      </div>
    );
  }

  //let image = props.styles[0].photos[0]
};

export default ImageGallery;
