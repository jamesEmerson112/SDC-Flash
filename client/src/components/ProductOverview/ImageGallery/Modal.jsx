import React, { useState, useEffect } from "react";
import {
  ModalForm,
  ModalClose,
  ModalOverlay,
  Modal,
  ModalImg,
} from "../../../styleComponents.jsx";
import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";

const ModalComponent = ({ mainPic, setExpanded, photos, selected }) => {
  const [selectedModal, setSelectedModal] = useState(selected);
  const [displayPic, setDisplayPic] = useState("");
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    setDisplayPic(mainPic);
  }, []);

  const modalClick = (e) => {
    console.log(e);
    setZoom(true);
  };

  console.log(selectedModal, "this is it");
  return (
    <div>
      <ModalOverlay>
        <ModalGallery>
          <div style={{ overflow: "scroll" }}>
            <Thumbnail
              photos={photos}
              modal={true}
              selected={selectedModal}
              click={(url, i) => {
                console.log(i, url);
                setDisplayPic(url);
                setSelectedModal(i);
              }}
            />
          </div>
          <div>
            <ModalImage
              className="modal_image"
              src={displayPic}
              onClick={modalClick}
            />
            {zoom === true ? (
              <ModalGallery>
                <ZoomModel>
                  <Modal></Modal>
                  <ModalClose
                    onClick={() => {
                      setZoom(false);
                    }}
                  >
                    X
                  </ModalClose>
                </ZoomModel>
              </ModalGallery>
            ) : (
              <div></div>
            )}
          </div>

          <ModalClose
            onClick={() => {
              setExpanded(false);
            }}
          >
            X
          </ModalClose>
        </ModalGallery>
      </ModalOverlay>
    </div>
  );
};

export default ModalComponent;

const ModalImage = styled.img`
  display: inline-block;
  max-width: 80vw;
  max-height: 100vh;
`;

const ModalGallery = styled.div`
  display: flex;
  color: white;
  text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
`;

const ZoomModel = styled.div`
  height: 45vh;
  width: 45vh;
  background-color: white;
`;
