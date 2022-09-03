import React from "react";
import { Button } from "../../../../styleComponents.jsx";

const Upload = (props) => {
  var photoArray = [];

  const upload = (event) => {
    event.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dyzzx6rsu",
        uploadPreset: "x24l2ww8",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          photoArray.push(result.info.url)
          props.upload(photoArray.slice(0, 5))
        }
      }
    );
    widget.open();
  };

  return (
    <div>
        <Button onClick={upload}>Open</Button>
        {props.photos.map((photo, index) => {
          return <img src={photo} key={index} className="ansPhotos"/>
        })}
    </div>
  )

};

export default Upload;
