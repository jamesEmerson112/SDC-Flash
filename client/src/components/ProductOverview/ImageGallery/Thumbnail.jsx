import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Thumbnail = ({ photos, click }) => {
  const [selected, setSelected] = useState(0);
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
