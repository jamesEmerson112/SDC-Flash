import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../env/config.js";
import QuestionList from "./QuestionList.jsx";

const App = () => {
  const [product, setProduct] = useState({});

  // will set product to the first product in list
  // maybe set this up to be random later
  useEffect(() => {
    axios
      .get("/products", config)
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>
        {product.id}: this is the product id that we can pass to each component
      </h1>
      <QuestionList />
    </div>
  );
};

export default App;
