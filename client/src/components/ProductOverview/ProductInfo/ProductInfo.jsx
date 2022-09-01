import React from "react";
import StarComponent from "../../StarComponent.jsx";
import styled from "styled-components";

const ProductInfo = ({ product, stylePrice, reviews }) => {
  const price = "$" + stylePrice;
  return (
    <div className="product-info">
      <div>
        <StarComponent reviews={reviews} />
        <Link>
          <a href="http://localhost:3000/index.html#Ratings_Reviews">
            Read all reviews
          </a>
        </Link>
      </div>
      <Category>{product.category}</Category>
      <Title>{product.name}</Title>
      <h2>{price}</h2>
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
