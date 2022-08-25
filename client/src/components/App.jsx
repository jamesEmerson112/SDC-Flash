import React from 'react';
import axios from 'axios';
import config from '../../../env/config.js';

const App = () => {
  const [product, setProduct] = React.useState({});

  // will set product to the first product in list
  // maybe set this up to be random later
  React.useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products', config)
    .then((response) => {
      setProduct(response.data[0]);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <h1>{product.id}: this is the product id that we can pass to each component</h1>
  )
}

export default App;