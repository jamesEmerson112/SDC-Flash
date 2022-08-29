import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";
import StyleSelector from "./StyleSelector/StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import config from "../../../../env/config.js";
import axios from "axios";

const ProductOverview = ({ id, product }) => {
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

  if (styles) {
    return (
      <div>
        <h1>Product Overview</h1>
        <div className="product-overview">
          <ImageGallery styles={styles} />
          <ProductInfo product={product} />
          <StyleSelector styles={styles} />
          <AddToCart />
        </div>
      </div>
    );
  }
};

export default ProductOverview;
