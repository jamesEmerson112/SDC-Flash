import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../env/config.js";
import QuestionList from "./QandA/QuestionList.jsx";
import RRIndex from "./Ratings_Reviews/index.jsx";
import ProductOverview from "./ProductOverview/ProductOverview.jsx";
import styled from "styled-components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [index, setIndex] = useState(0);

  // will set product to the first product in list
  // maybe set this up to be random later
  useEffect(() => {
    axios
      .get("/products", config)
      .then((response) => {
        setProducts(response.data);
        setProduct(response.data[index]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const prev = (e) => {
    e.preventDefault();
    let currentIndex = index;
    if (index > 0) {
      setIndex(index - 1);
      setProduct(products[currentIndex - 1]);
    }
  };

  const next = (e) => {
    e.preventDefault();
    let currentIndex = index;
    if (currentIndex < products.length) {
      setIndex(index + 1);
      setProduct(products[currentIndex + 1]);
    }
  };

  if ("id" in product) {
    return (
      <div>
        <TitleHeader>
          {index > 0 ? (
            <button onClick={prev}>Previous Product</button>
          ) : (
            <div></div>
          )}
          <h1>
            {product.id}: this is the product id that we can pass to each
            component
          </h1>
          {index + 1 < products.length ? (
            <button onClick={next}>Next Product</button>
          ) : (
            <div></div>
          )}
        </TitleHeader>
        <QuestionList product={product} />
        <ProductOverview id={product.id} product={product} />
        <RRIndex id={product.id} />
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default App;

const TitleHeader = styled.div`
  display: flex;
  border: 3px solid black;
  justify-content: space-between;
  gap: 30px;
`;
