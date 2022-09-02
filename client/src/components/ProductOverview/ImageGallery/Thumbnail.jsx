import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Thumbnail = ({ photos, click, selected, setSelected, modal }) => {
  if (modal === false) {
    return photos.map((photo, i) => {
      if (photo.thumbnail_url === null) {
        return (
          <ThumbnailParent
            onClick={() => {
              click(photo.url, i);
              setSelected(i);
            }}
            key={i}
            className={selected === i ? "selected" : "not_selected"}
          >
            <img
              className="thumbnail"
              src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              width="50px"
            />
          </ThumbnailParent>
        );
      } else {
        return (
          <ThumbnailParent
            onClick={() => {
              click(photo.url, i);
              setSelected(i);
            }}
            key={i}
            className={selected === i ? "selected" : "not_selected"}
          >
            <img className="thumbnail" src={photo.thumbnail_url} width="50px" />
          </ThumbnailParent>
        );
      }
    });
  } else {
    return photos.map((photo, i) => {
      if (photo.thumbnail_url === null) {
        return (
          <ModalParent
            onClick={() => {
              click(photo.url, i);
              setSelected(i);
            }}
            key={i}
            className={selected === i ? "selected" : "not_selected"}
          >
            <ModalThumbnail src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" />
          </ModalParent>
        );
      } else {
        return (
          <ModalParent
            onClick={() => {
              click(photo.url, i);
              setSelected(i);
            }}
            key={i}
            className={selected === i ? "selected" : "not_selected"}
          >
            <ModalThumbnail src={photo.thumbnail_url} />
          </ModalParent>
        );
      }
    });
  }
};

export default Thumbnail;

const ThumbnailParent = styled.div`
  display: flex;
  box-sizing: border-box;
  grid-column-start: 1;
  grid-row-start: 1;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  min-height: 81px;
  justify-content: center;
  align-items: center;
`;

const ModalParent = styled.div`
  display: flex;
  background-color: transparent;
  padding: 5px;
  justify-content: center;
  align-items: space-between;
  max-height: 100%;
  border: 1px solid black;
`;

const ModalThumbnail = styled.img`
  padding: 10px;
  max-width: 100%;
`;
