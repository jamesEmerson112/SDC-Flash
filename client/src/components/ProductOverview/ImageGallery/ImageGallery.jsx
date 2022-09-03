import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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

  if (style) {
    const photos = style.photos;

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
              <div style={{ width: "32px" }}></div>
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
    } else {
      return (
        <div className="image-gallery">
          {expanded ? (
            <ModalOverlay>
              <ModalGallery>
                <div className="modal">
                  {/* <Thumbnail
                      photos={photos}
                      click={click}
                      setSelected={setSelected}
                      selected={selected}
                      modal={true}
                    /> */}
                </div>
                <ModalImage src={mainPic} />
                <ModalClose
                  onClick={() => {
                    setExpanded(false);
                  }}
                >
                  X
                </ModalClose>
              </ModalGallery>
            </ModalOverlay>
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
    }
  }
};

export default ImageGallery;

const ModalImage = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100vh;
`;

const ModalGallery = styled.div`
  color: white;
  text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
  max-height: 100%;
`;
