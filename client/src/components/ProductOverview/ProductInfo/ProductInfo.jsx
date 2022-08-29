import React from "react";

const ProductInfo = ({ product, stylePrice }) => {
  console.log(stylePrice);
  return (
    <div className="item product-info">
      <p>Make some stupid stars</p>
      <h1>{product.category}</h1>
      <h2>{product.name}</h2>
      <h3>{stylePrice}</h3>
    </div>
  );
};

export default ProductInfo;
