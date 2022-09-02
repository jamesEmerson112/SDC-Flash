import React from "react";
import { Button } from "/client/src/styleComponents.jsx";

const Upload = (props) => {
  var photoArray = [];

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
          photoArray.push(result.info.url);
          props.upload(photoArray);
        }
      }
    );
    widget.open();
  };

  return <Button onClick={upload}>Open</Button>;
};

export default Upload;
