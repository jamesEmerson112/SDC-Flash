import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
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
  const [lightMode, setLightMode] = useState('')

  // will set product to the first product in list
  // maybe set this up to be random later
  useEffect(() => {
    axios
      .get("/products?count=1000", config)
      .then((response) => {
        setProducts(response.data);
        let randInd = Math.floor(Math.random() * 1000);
        randInd = 0;
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
      setLightMode('LM')
    } else {
      document.body.className = "lightMode";
      setClrMode("Light Mode");
      setLightMode('')
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
                <Button onClick={prev}>{products[index - 1].name}</Button>
              ) : (
                <div></div>
              )}
              <h1>{product.name}</h1>
              {index + 1 < products.length ? (
                <Button onClick={next}>{products[index + 1].name}</Button>
              ) : (
                <div></div>
              )}
            </TitleHeader>
            {/* <Button
              onClick={(e) => {
                clickTracker(e);
                toggleClrMode(e);
              }}
            >
              {clrMode}
            </Button> */}
            <DMContainer>
              <div id="DM" className={lightMode} onClick={toggleClrMode}>
                <i className="switch"/>
              </div>
              <Icons><FaSun/> || <FaMoon/></Icons>
            </DMContainer>

            <ProductOverview id={product.id} product={product} />
            <QuestionList product={product} />
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
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const DMContainer = styled.div`
display: flex;
justify-content: flex-end;
width: 75vw;
margin-top: 10px;
`

const Icons = styled.span`
  margin-left: 10px;
`