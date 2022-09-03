import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../../env/config.js";
import QuestionList from "./QandA/QuestionList.jsx";
import RRIndex from "./Ratings_Reviews/index.jsx";
import ProductOverview from "./ProductOverview/ProductOverview.jsx";
import styled from "styled-components";
import { Button } from "../styleComponents.jsx";

export const ClickTracker = React.createContext();
export const DarkMode = React.createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [index, setIndex] = useState(0);
  const [clrMode, setClrMode] = useState("Light Mode");

  // will set product to the first product in list
  // maybe set this up to be random later
  useEffect(() => {
    axios
      .get("/products?count=1000", config)
      .then((response) => {
        setProducts(response.data);
        let randInd = Math.floor(Math.random() * 1000);
        randInd = 0; //908
        setIndex(randInd);
        setProduct(response.data[randInd]);
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

  const toggleClrMode = () => {
    if (clrMode === "Light Mode") {
      document.body.className = "darkMode";
      setClrMode("Dark Mode");
    } else {
      document.body.className = "";
      setClrMode("Light Mode");
    }
  };

  const clickTracker = (e, widget = "app") => {
    let date = new Date();
    let data = {
      element: e.target.nodeName.toLowerCase(),
      widget: widget,
      time: date.toString(),
    };
    // console.log("DATA: ,", data);
    // axios
    //   .post("/interactions", data, config)
    //   .then((res) => console.log(res.config.data, res.data))
    //   .catch((err) => console.log(err));
  };

  if ("id" in product) {
    return (
      <div>
        <ClickTracker.Provider value={clickTracker}>
          <DarkMode.Provider value={clrMode}>
            <TitleHeader onClick={clickTracker}>
              {index > 0 ? (
                <Button onClick={prev}>Previous Product</Button>
              ) : (
                <div></div>
              )}
              <h1>
                {product.id}: this is the product id that we can pass to each
                component
              </h1>
              {index + 1 < products.length ? (
                <Button onClick={next}>Next Product</Button>
              ) : (
                <div></div>
              )}
            </TitleHeader>
            <Button
              onClick={(e) => {
                clickTracker(e);
                toggleClrMode(e);
              }}
            >
              {clrMode}
            </Button>
            <QuestionList product={product} />
            <ProductOverview id={product.id} product={product} />
            <RRIndex id={product.id} />
          </DarkMode.Provider>
        </ClickTracker.Provider>
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
