import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ModalComponent from "./Modal.jsx";

import { ModalClose, ModalOverlay, Modal } from "../../../styleComponents.jsx";

const ImageGallery = ({
  style,
  mainPic,
  click,
  BackArrow,
  selected,
  setSelected,
  NextArrow,
}) => {
  const [expanded, setExpanded] = useState(false);
  // if there are styles that have a property of photos, render them, if not i will have a placholder (bottom)
  if ("photos" in style) {
    const photos = style.photos;
    // if there are is no main picture, set the default picture
    if (mainPic === null) {
      return (
        <div className="image-gallery">
          <div className="thumbnails">
            <Thumbnail
              photos={photos}
              click={click}
              setSelected={setSelected}
              selected={selected}
              modal={false}
            />
          </div>
          <div className="main_pic">
            {selected === 0 ? (
              <div style={{ width: "39px" }}></div>
            ) : (
              <button className="pic_button_left" onClick={BackArrow}>
                <FaArrowLeft />
              </button>
            )}
            <img
              className="pic"
              src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              onClick={() => {
                setExpanded(true);
                console.log("hi");
              }}
            />
            {selected === style.photos.length - 1 ? (
              <div></div>
            ) : (
              <button className="pic_button_right" onClick={NextArrow}>
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      );
      // if there is a main picture use that for the display
    } else {
      return (
        <div className="image-gallery">
          {expanded ? (
            //if the main picture is clicked on display the EXTENDED DISPLAY
            <ModalComponent
              mainPic={mainPic}
              setExpanded={setExpanded}
              photos={photos}
              selected={selected}
            />
          ) : (
            <div></div>
          )}
          <div className="thumbnails">
            <Thumbnail
              photos={photos}
              click={click}
              setSelected={setSelected}
              selected={selected}
              modal={false}
            />
          </div>
          <div className="main_pic">
            {selected === 0 ? (
              <div style={{ width: "32px" }}></div>
            ) : (
              <button className="pic_button_left" onClick={BackArrow}>
                <FaArrowLeft />
              </button>
            )}
            <img
              className="pic"
              src={mainPic}
              onClick={() => {
                setExpanded(true);
                console.log(expanded);
              }}
              onError={() => {
                console.log(this);
              }}
            />
            {selected === style.photos.length - 1 ? (
              <div></div>
            ) : (
              <button className="pic_button_right" onClick={NextArrow}>
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      );
    }
    // if there are no styles available
  } else {
    return (
      <div className="image-gallery">
        <div className="main_pic">
          <img
            className="pic"
            src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
          />
        </div>
      </div>
    );
  }
};

export default ImageGallery;

const ModalImage = styled.img`
  display: inline-block;
  max-width: 100vw;
  max-height: 100vh;
`;

const ModalGallery = styled.div`
  color: white;
  text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;
