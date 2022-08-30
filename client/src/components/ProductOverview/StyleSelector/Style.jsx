import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Style = ({ photos, click }) => {
  const [selected, setSelected] = useState(0);
  // let height = Math.ceil(photos.length / 4);
  // height = 100 / height + "%";
  // console.log(typeof height);
  return photos.map((photo, i) => {
    return (
      <StyleParent
        onClick={(e) => {
          click(photo.style_id);
          setSelected(i);
        }}
        key={i}
        className={selected === i ? "selected" : "not_selected"}
        // height={height}
      >
        <img
          className="thumbnail"
          src={photo.photo.thumbnail_url}
          width="75px"
        />
      </StyleParent>
    );
  });
};

export default Style;

const StyleParent = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 100%;
  padding: 5px;
  width: 19%;
  height: 75px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 9px;
`;
