import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import config from "../../../../env/config.js";
import axios from "axios";

const ProductOverview = ({ id }) => {
  const [styles, setStyles] = useState();

  useEffect(() => {
    axios
      .get(`/products/${id}/styles`, config)
      .then((response) => {
        setStyles(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <h1>Product Overview</h1>
      <div className="product-overview">
        <ImageGallery styles={styles} />
        <ProductInfo />
        <StyleSelector />
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductOverview;
