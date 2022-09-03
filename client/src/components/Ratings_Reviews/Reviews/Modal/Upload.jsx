import React, { useState } from "react";
import { Button } from "../../../../styleComponents.jsx";

const Upload = (props) => {
  const [photoArray, setPhotoArray] = useState(props.photos);

  const upload = (event) => {
    event.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dyzzx6rsu",
        uploadPreset: "x24l2ww8",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          let temp = photoArray.concat([result.info.url]);
          props.upload(temp.slice(0, 5));
          setPhotoArray(temp.slice(0, 5));
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <Button onClick={upload}>Upload Photos</Button>
      <br />
      {photoArray.map((photo, index) => (
        <img src={photo} key={index} className="ansPhotos" />
      ))}
    </div>
  );
};

export default Upload;
