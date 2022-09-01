import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ImageGallery = ({
  style,
  mainPic,
  click,
  BackArrow,
  selected,
  setSelected,
  NextArrow,
}) => {
  if (style) {
    const photos = style.photos;

    if (mainPic === null) {
      return (
        <div className="image-gallery">
          <div className="thumbnails">
            <Thumbnail photos={photos} click={click} />
          </div>
          <button></button>
          <img
            className="pic"
            src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
          />
        </div>
      );
    } else {
      return (
        <div className="image-gallery">
          <button className="pic_button" onClick={BackArrow}>
            <FaArrowLeft />
          </button>
          <div className="image-gallery">
            <div className="thumbnails">
              <Thumbnail
                photos={photos}
                click={click}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
            <img className="pic" src={mainPic} />
          </div>
          <button className="pic_button" onClick={NextArrow}>
            <FaArrowRight />
          </button>
        </div>
      );
    }
  }
};

export default ImageGallery;
