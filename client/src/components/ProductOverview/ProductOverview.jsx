import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";
import StyleSelector from "./StyleSelector/StyleSelector.jsx";
import AddToCart from "./AddToCart/AddToCart.jsx";
import config from "../../../../env/config.js";
import axios from "axios";
import styled from "styled-components";

const ProductOverview = ({ id, product }) => {
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [mainPic, setMainPic] = useState({});
  const [indexMainPic, setIndexMainPic] = useState(0);
  const [success, setSuccess] = useState(false);
  console.log(product);
  const choseStyle = (styleId) => {
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === styleId) {
        setStyle(styles[i]);
        setMainPic(styles[i].photos[indexMainPic].url);
        setSuccess(false);
      }
    }
  };

  const ChooseMainPic = (url, index) => {
    setMainPic(url);
    setIndexMainPic(index);
  };

  useEffect(() => {
    axios
      .get(`/products/${id}/styles`, config)
      .then((response) => {
        setStyles(response.data.results);
        setStyle(response.data.results[0]);
        setMainPic(response.data.results[0].photos[0].url);
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
          <ImageGallery style={style} mainPic={mainPic} click={ChooseMainPic} />
          <ProductInfo product={product} stylePrice={style.original_price} />
          <StyleSelector styles={styles} choseStyle={choseStyle} />
          <AddToCart style={style} setSuccess={setSuccess} success={success} />
          <Description>{product.description}</Description>
        </div>
      </div>
    );
  }
};

export default ProductOverview;

const Description = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  box-shadow: 3px 3px 10px rgb(0 0 0);
  margin: 5px 150px;
  font-size: large;
  box-sizing: content-box;
`;
