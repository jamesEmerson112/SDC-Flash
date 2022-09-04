import React from "react";
import StarComponent from "../../StarComponent.jsx";
import styled from "styled-components";

const ProductInfo = ({ product, style, ratings }) => {
  var price;
  var salePrice = null;
  if ("original_price" in style) {
    price = "$" + style.original_price;
    salePrice = "$" + style.sale_price;
  } else {
    style.sale_price = null;
    price = "No price";
  }
  const numberOfRatings = 0; //ratings.length;
  return (
    <div className="product-info">
      <div>
        {/* <StarComponent ratings={ratings} /> */}
        <Link>
          <a href="#Ratings_Reviews">Read all {numberOfRatings} reviews</a>
        </Link>
      </div>
      <Category>{product.category}</Category>
      <Title>{product.name}</Title>
      {style.sale_price !== null ? (
        <div>
          <OldPrice>{price}</OldPrice>
          <Sale>{salePrice}</Sale>
        </div>
      ) : (
        <h2>{price}</h2>
      )}
    </div>
  );
};

export default ProductInfo;

const Link = styled.p`
  font-size: small;
  display: inline;
  margin-left: 5px;
`;

const Title = styled.h1`
  text-decoration: underline;
  font-style: oblique;
`;

const Category = styled.h3`
  font-style: italic;
`;

const OldPrice = styled.h2`
  text-decoration: line-through;
  display: inline;
`;

const Sale = styled.h2`
  color: red;
  display: inline;
  padding-left: 20px;
`;
