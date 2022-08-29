import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";
import StyleSelector from "./StyleSelector/StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import config from "../../../../env/config.js";
import axios from "axios";

const ProductOverview = ({ id, product }) => {
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState({});

  const choseStyle = (styleId) => {
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === styleId) {
        console.log(styles[i], "line 16");
        setStyle(styles[i]);
      }
    }
  };

  useEffect(() => {
    axios
      .get(`/products/${id}/styles`, config)
      .then((response) => {
        console.log(response.data.results);
        setStyles(response.data.results);
        setStyle(response.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (styles.length > 0) {
    return (
      <div>
        <h1>Product Overview</h1>
        <div className="product-overview">
          <ImageGallery style={style} />
          <ProductInfo product={product} stylePrice={style.original_price} />
          <StyleSelector styles={styles} choseStyle={choseStyle} />
          <AddToCart />
        </div>
      </div>
    );
  }
};

export default ProductOverview;
