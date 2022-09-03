import React, { useState, useEffect } from "react";
// import { Box } from "./styledComponents/styledComponents.jsx";
import styled from "styled-components";
import DropDown from "./DropDown.jsx";
import _ from "underscore";
import { config } from "../../../../../env/config.js";
import axios from "axios";

const AddToCart = ({ style, setSuccess, success }) => {
  const [value, setValue] = useState("");
  const [quantities, setQuantities] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState("");
  const [size, setSize] = useState("");
  const [label, setLabel] = useState("Select a size");
  const [stateStyles, setStateStyles] = useState([]);
  // set the style name to be returned with the cart purchase
  const styleName = style.name;
  // will be set to true upon successful addition to cart
  let sizesAvailable = _.map(style.skus, (sku) => {
    return sku.size;
  });

  // obtain all of the sizes from the current style and add to an array
  const styles = [];
  for (let key in style.skus) {
    let skew = style.skus[key];
    styles.push({ key: key, value: skew.size, quantity: skew.quantity });
  }

  useEffect(() => {
    setStateStyles(styles);
    setLabel("Select a size");
    console.log("This is what i am looking for", stateStyles);
  }, [size]);

  const selectSize = (e) => {
    let size = e.target.value;
    for (let i = 0; i < styles.length; i++) {
      let currentSku = styles[i];
      if (currentSku.value === size) {
        const N = currentSku.quantity;
        const arr = Array.from({ length: N }, (_, index) => index + 1);
        const quantities = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 15) {
            break;
          } else {
            let obj = { value: arr[i] };
            quantities.push(obj);
          }
        }
        setSize(size);
        setQuantities(quantities);
        setValue(currentSku);
        setAlert("");
        setSuccess(false);
      }
    }
  };
  // sets quantity state based on the quantity drop down
  const selectQuantity = (e) => {
    setQuantity(e.target.value);
    setAlert("");
    setSuccess(false);
  };
  // will handle if no sizes available for this style
  if (sizesAvailable.length === 1 && sizesAvailable[0] === null) {
    return (
      <div>
        <h3 className="item add-to-cart">Add To Cart</h3>
        <div>OUT OF STOCK</div>
      </div>
    );
  }

  const addToCart = () => {
    const data = { sku_id: parseInt(value.key), count: parseInt(quantity) };
    axios
      .post("/cart", data, config)
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
    setSuccess(true);
    setQuantity(0);
    setSize("");
    setValue("");
    setStateStyles([]);
    setLabel("Select a size");
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  // set values for what the button will do depending on the state
  if (value !== "" && quantity !== 0) {
    var button = <Button onClick={addToCart}>Add To Cart</Button>;
  } else if (value !== "" && quantity === 0) {
    var button = (
      <Button
        onClick={(e) => {
          setAlert("Select a quantity!");
        }}
      >
        Add To Cart
      </Button>
    );
  } else if (value === "") {
    var button = (
      <Button
        onClick={(e) => {
          setAlert("Select a size!");
        }}
      >
        Add To Cart
      </Button>
    );
  }
  const length = stateStyles.length;
  return (
    <div className="add-to-cart">
      <div>
        <DropDown
          label={"Select a size"}
          options={stateStyles}
          onChange={selectSize}
        />
        {value === "" ? (
          <DropDown label={"-"} value={value} options={[]} />
        ) : (
          <DropDown
            label={"1"}
            options={quantities}
            onChange={selectQuantity}
          />
        )}
        {!success ? <Alert>{alert}</Alert> : <Success>Added to Cart</Success>}
      </div>
      {button}
    </div>
  );
};

export default AddToCart;

const Alert = styled.div`
  color: red;
  font-style: italic;
  font-weight: bold;
  margin-bottom: 5px;
  margin-left: 5px;
  font-size: large;
  display: inline-flex;
`;

const Success = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 5px;
  width: fit-content;
  display: inline-flex;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px 5px;
  background-color: white;
  display: block;
  max-width: fit-content;
`;
