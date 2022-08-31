import React, { useState } from "react";
// import { Box } from "./styledComponents/styledComponents.jsx";
import styled from "styled-components";
import DropDown from "./DropDown.jsx";
import _ from "underscore";

const AddToCart = ({ style }) => {
  const [value, setValue] = useState("");
  const [quantities, setQuantities] = useState([]);
  const [quantity, setQuantity] = useState(0);

  let sizesAvailable = _.map(style.skus, (sku) => {
    return sku.size;
  });

  // obtain all of the sizes from the current style and add to an array
  const styleSkus = [];
  for (let key in style.skus) {
    let skew = style.skus[key];
    styleSkus.push({ key: key, value: skew.size, quantity: skew.quantity });
  }
  // if there are any duplicates this will remove them
  let uniqueSkus = [...new Set(styleSkus)];
  // if value is empty set it to first skew

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
        setQuantities(quantities);
        setValue(currentSku);
      }
    }
  };

  const selectQuantity = (e) => {
    setQuantity(e.target.value);
  };
  // will handle if no sizes available for this style
  if (sizesAvailable.length === 1 && sizesAvailable[0] === null) {
    return (
      <div>
        <h3 className="item add-to-cart">Add To Cart</h3>
        <div>Out Of Stock</div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="item add-to-cart">Add To Cart</h3>
      <DropDown
        label={"Select a Size"}
        options={uniqueSkus}
        onChange={selectSize}
      />
      {value === "" ? (
        <DropDown
          label={"-"}
          value={value}
          options={[]}
          onChange={() => alert("pick a size")}
        />
      ) : (
        <DropDown
          label={"Select a Quantity"}
          options={quantities}
          onChange={selectQuantity}
        />
      )}
    </div>
  );
};

export default AddToCart;
