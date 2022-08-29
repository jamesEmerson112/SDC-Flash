import React from "react";

const ProductInfo = ({ product }) => {
  console.log(product.category);
  return (
    <div className="item product-info">
      <p>Make some stupid stars</p>
      <h1>{product.category}</h1>
      <h2>{product.name}</h2>
      <h3>
        {product.default_price}
        <br></br>this price is a wrong placholder, need to get from style
      </h3>
    </div>
  );
};

export default ProductInfo;
