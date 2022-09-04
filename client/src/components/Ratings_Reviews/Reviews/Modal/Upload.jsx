import React, {useState} from "react";
import styled from "styled-components";
import { Button } from "../../../../styleComponents.jsx";

const Upload = (props) => {

  const [photoArray, setPhotoArray] = useState([]);
  let temp = [];

  const upload = (event) => {
    event.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dyzzx6rsu",
        uploadPreset: "x24l2ww8",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          temp = photoArray.concat(temp);
          temp.push(result.info.url);
          props.upload(temp.slice(0, 5));
          setPhotoArray(temp.slice(0, 5));
        }
      }
    );
    widget.open();
  };

  return (
    <div>
        <br />
        {[...Array(5)].map((photo, index) => {
          if (photoArray[index]) {
            return <img src={photoArray[index]} key={index} className="ansPhotos" />
          } else {
            return <Empty key={index} onClick={upload}/>
          }
        })}
    </div>
  )

};

export default Upload;

const Empty = styled.img`
width: 50px;
height: 50px;
margin-right: 10px;
border: 2px dashed black;
cursor: pointer;
`;


