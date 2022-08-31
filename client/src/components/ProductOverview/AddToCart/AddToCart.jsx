import React, { useState } from "react";
// import { Box } from "./styledComponents/styledComponents.jsx";
import styled from "styled-components";
import DropDown from "./DropDown.jsx";
import _ from "underscore";

const AddToCart = ({ style, addItemsToCart }) => {
  const [value, setValue] = useState("");
  const [quantities, setQuantities] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState("");
  const [size, setSize] = useState("");
  const [success, setSuccess] = useState(false);
  // set the style name to be returned with the cart purchase
  const styleName = style.name;
  // will be set to true upon successful addition to cart

  let sizesAvailable = _.map(style.skus, (sku) => {
    return sku.size;
  });

  // obtain all of the sizes from the current style and add to an array
  const styleSkus = [];
  for (let key in style.skus) {
    let skew = style.skus[key];
    styleSkus.push({ key: key, value: skew.size, quantity: skew.quantity });
  }

  const selectSize = (e) => {
    let size = e.target.value;
    for (let i = 0; i < styleSkus.length; i++) {
      let currentSku = styleSkus[i];
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
  // set values for what the button will do depending on the state
  if (value !== "" && quantity !== 0) {
    var button = (
      <Button
        onClick={() => {
          setSuccess(true);
          let purchase = { style: styleName, size: size, quantity: quantity };
          setQuantity(0);
          return addItemsToCart(purchase);
        }}
      >
        Add To Cart
      </Button>
    );
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
  console.log(success);
  return (
    <div>
      {!success ? <Alert>{alert}</Alert> : <Success>Added to Cart</Success>}

      <div className="item add-to-cart">
        <DropDown
          label={"Select a Size"}
          options={styleSkus}
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
`;

const Success = styled.div`
  box-shadow: 3px 3px 10px rgb(0 0 0 / 0.2);
  box-sizing: border-box;
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 5px;
  width: fit-content;
`;

const Button = styled.button`
  margin-top: 5px;
`;
