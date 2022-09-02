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
  const [expanded, setExpanded] = useState(false);

  if (style) {
    const photos = style.photos;

    if (mainPic === null) {
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
                modal={false}
              />
            </div>
            <img
              className="pic"
              src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
            />
          </div>
          <button className="pic_button" onClick={NextArrow}>
            <FaArrowRight />
          </button>
        </div>
      );
    } else {
      return (
        <div className="image-gallery">
          {expanded ? (
            <div className="modalOverlay">
              <div className="modal">
                <div className="modalForm">
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
                </div>
                <div
                  className="modalClose"
                  onClick={() => {
                    setExpanded(false);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {selected === 0 ? (
            <div></div>
          ) : (
            <button className="pic_button" onClick={BackArrow}>
              <FaArrowLeft />
            </button>
          )}

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
            <img
              className="pic"
              src={mainPic}
              onClick={() => {
                setExpanded(true);
                console.log("hi");
              }}
            />
          </div>
          {selected === style.photos.length - 1 ? (
            <div></div>
          ) : (
            <button className="pic_button" onClick={NextArrow}>
              <FaArrowRight />
            </button>
          )}
        </div>
      );
    }
  }
};

export default ImageGallery;

const ModalImage = styled.img`
  display: inline-block;
  max-width: 100%;
`;
