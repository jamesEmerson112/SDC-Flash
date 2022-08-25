import React from "react";
import ImageGallery from "./ImageGallery.jsx";

const ProductOverview = (props) => {

  return (
    <div>
      <h1>Product Overview</h1>
      <ImageGallery product={props.product}/>
    </div>
  )
}

export default ProductOverview;