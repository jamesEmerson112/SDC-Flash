import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Thumbnail = ({ photos, click }) => {
  const [selected, setSelected] = useState(0);
  return photos.map((photo, i) => {
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
  });
};

//<img src={photo.thumbnail_url} height={height} />

export default Thumbnail;

const ThumbnailParent = styled.div`
  display: flex;
  box-sizing: border-box;
  grid-column-start: 1;
  grid-row-start: 1;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  min-height: 81px;
  justify-content: center;
  align-items: center;
`;
