import React, {useState} from "react";
import styled from "styled-components";

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
    <Container>
        <br />
        {[...Array(5)].map((_, index) =>
          photoArray[index] ? <img src={photoArray[index]} key={index} className="ansPhotos" /> : <Empty key={index} onClick={upload}/>
        )}
    </Container>
  )
};

export default Upload;

const Container = styled.div`
margin-bottom: 8px;
`

const Empty = styled.img`
width: 50px;
height: 50px;
margin-right: 10px;
border: 2px dashed black;
cursor: pointer;
`;


