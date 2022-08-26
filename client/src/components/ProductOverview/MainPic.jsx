import React from "react";

const MainPic = ({ photos }) => {
  const mainPic = photos[0];

  // return <img src={mainPic.url} />;
  return <div className="title">Image Gallery</div>;
};

export default MainPic;
