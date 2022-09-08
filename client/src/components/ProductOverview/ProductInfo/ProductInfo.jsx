import React, { useContext } from "react";
import Stars from "../../Ratings_Reviews/Stars.jsx";
import styled from "styled-components";
import { DarkMode } from "../../App.jsx";
import SocialMedia from "../SocialMedia.jsx";

const ProductInfo = ({ product, style, ratings, numberOfReviews }) => {
  const darkMode = useContext(DarkMode);
  var color;
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

  if (darkMode === "Light Mode") {
    color = "rgb(244, 241, 241)";
  } else {
    color = "darkgray";
  }

  return (
    <div className="product-info">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <Stars color={color} rating={overall} />
          <Link>
            <Span
              darkMode={darkMode}
              onClick={() => {
                window.location.href = "#Ratings_Reviews";
                history.pushState({}, "", window.location.origin);
              }}
            >
              Read all {numberOfReviews} reviews
            </Span>
          </Link>
        </div>
        <SocialMedia></SocialMedia>
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
  font-weight: 900;
`;

const Category = styled.h3`
  font-weigth: 300;
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

const Span = styled.span`
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:: before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) =>
      props.darkMode === "Light Mode" ? "black" : "white"};
    transition: width 0.25s ease-out;
  }
  &:hover {
    font-weight: bold;
    &::before {
      width: 100%;
    }
  }
`;
