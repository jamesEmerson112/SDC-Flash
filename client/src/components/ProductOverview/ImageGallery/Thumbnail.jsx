import React from "react";

const Thumbnail = ({ photos }) => {
  console.log(photos);
  return photos.map((photo, i) => {
    return <img className="thumbnail" key={i} src={photo.thumbnail_url} />;
  });
};

//<img src={photo.thumbnail_url} height={height} />

export default Thumbnail;
