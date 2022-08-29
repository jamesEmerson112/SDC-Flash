import React from "react";

const Thumbnail = ({ photos }) => {
  // console.log(photos);
  let height = 500 / photos.length + "vh";
  return photos.map((photo, i) => {
    return (
      <img
        className="image"
        key={i}
        src={photo.thumbnail_url}
        height={height}
        width={height}
      />
    );
  });
};

//<img src={photo.thumbnail_url} height={height} />

export default Thumbnail;
