import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

const Thumbnail = ({ photos, click, selected, setSelected, modal }) => {
  // if selected was set on a previous product to a thumbnail that doesnt exist, set it to the first one
  useEffect(() => {
    if (selected >= photos.length) {
      setSelected(0);
    }
  }, [photos]);

  if (modal === false) {
    return photos.map((photo, i) => {
      if (photo.thumbnail_url === null) {
        photo.thumbnail_url =
          "https://www.cnet.com/a/img/resize/905e1d3662ccaaf4763408156c833b91a47dfd07/2020/08/31/9562c49a-8f37-434d-8070-2751fb03d683/will-smith-fresh-prince-bel-air.jpg?auto=webp&fit=crop&height=900&width=1200";
      }

      return (
        <ThumbnailParent
          style={{ height: "91px", width: "51px" }}
          onClick={() => {
            click(photo.url, i);
            setSelected(i);
          }}
          key={i}
          className={selected === i ? "selected" : "not_selected"}
        >
          <img className="thumbnail" src={photo.thumbnail_url} />
        </ThumbnailParent>
      );
    });
  } else {
    return photos.map((photo, i) => {
      if (photo.thumbnail_url === null) {
        photo.thumbNail_url ===
          "https://www.cnet.com/a/img/resize/905e1d3662ccaaf4763408156c833b91a47dfd07/2020/08/31/9562c49a-8f37-434d-8070-2751fb03d683/will-smith-fresh-prince-bel-air.jpg?auto=webp&fit=crop&height=900&width=1200";
      }
      if (selected === i) {
        return (
          <ModalParentSelected
            onClick={() => {
              click(photo.url, i);
            }}
            key={i}
          >
            <ModalThumbnail src={photo.thumbnail_url} width="80px" />
          </ModalParentSelected>
        );
      } else {
        return (
          <ModalParentNotSelected
            onClick={() => {
              click(photo.url, i);
            }}
            key={i}
          >
            <ModalThumbnail src={photo.thumbnail_url} width="80px" />
          </ModalParentNotSelected>
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
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2px;
  min-height: 75px;
  min-width: 75px;
  margin: 3px;
  //border: 1px solid black;
  //box-shadow: 3px 3px 10px rgb(0, 0, 0);
`;

const ModalParentSelected = styled.div`
  display: flex;
  display: row;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  height: 14vh;
  width: 7vw;
  border: 1px solid black;
  border: 2px solid black;
  background-color: black;
`;
const ModalParentNotSelected = styled.div`
  display: flex;
  display: row;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  height: 14vh;
  width: 7vw;
  border: 1px solid black;
  border: 2px solid black;
  background-color: grey;
`;

const ModalThumbnail = styled.img`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px rgb(0, 0, 0);
`;
