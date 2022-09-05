import React from "react";
import Stars from "../../Ratings_Reviews/Stars.jsx";
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

  let total = ["1", "2", "3", "4", "5"].reduce((stars, num) => {
    if (ratings[num]) {
      stars += Number(ratings[num]);
    }
    return stars;
  }, 0);

  let overall =
    ["1", "2", "3", "4", "5"].reduce((stars, num) => {
      if (ratings[num]) {
        stars += Number(ratings[num]) * Number(num);
      }
      return stars;
    }, 0) / total;

  overall = Math.round(overall * 10) / 10;

  return (
    <div className="product-info">
      <div>
        <Stars rating={overall} />
        <Link>
          <a
            onClick={() => {
              window.location.href = "#Ratings_Reviews";
              history.pushState({}, "", window.location.origin);
            }}
          >
            Read all {total} reviews
          </a>
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
