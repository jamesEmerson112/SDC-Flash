import React from "react";

const Thumbnail = ({ photos }) => {
  console.log(photos);
  return photos.map((photo, i) => {
    return (
      <div key={i} className="thumbnail-parent">
        <img className="thumbnail" src={photo.thumbnail_url} width="70px" />
      </div>
    );
  });
};

//<img src={photo.thumbnail_url} height={height} />

export default Thumbnail;
