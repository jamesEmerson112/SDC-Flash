import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Style = ({ photos, click }) => {
  const [selected, setSelected] = useState(0);
  if (selected > photos.length) {
    setSelected(0);
  }
  return photos.map((photo, i) => {
    if (photo.photo.thumbnail_url === null) {
      return (
        <Container key={i}>
          <StyleName>{photo.name}</StyleName>
          <StyleParent
            onClick={(e) => {
              click(photo.style_id);
              setSelected(i);
            }}
            className={selected === i ? "selected" : "not_selected"}
          >
            <Check>{selected === i ? <FaCheck /> : ""}</Check>
            <img
              className="thumbnail"
              src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
              width="85px"
            />
          </StyleParent>
        </Container>
      );
    } else {
      return (
        <Container key={i}>
          <StyleName>{photo.name}</StyleName>
          <StyleParent
            onClick={(e) => {
              click(photo.style_id);
              setSelected(i);
            }}
            className={selected === i ? "selected" : "not_selected"}
          >
            <Check>{selected === i ? <FaCheck /> : ""}</Check>
            <img
              className="thumbnail"
              src={photo.photo.thumbnail_url}
              width="85px"
            />
          </StyleParent>
        </Container>
      );
    }
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
  max-width: 100%;
  height: 80px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-bottom: 9px;
  z-index: 1;
  box-shadow: 3px 3px 10px rgb(0, 0, 0);
  align-self: flex-end;
  align-items: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  max-height: 100%;
  min-height: 152px;
`;

const StyleName = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  font-size: small;
  margin-bottom: 3px;
`;

const Check = styled.span`
  font-size: 40px;
  position: absolute;
`;
