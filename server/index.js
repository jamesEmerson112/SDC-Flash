const V = require('./Utility/utility.js');

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);

// V.sayHello();

// const getProductData = new Promise((resolve, reject) => {
//   let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/';
//   V.Axios.get(url, {
//     transformResponse: [(data) => {
//       const parsedData = JSON.parse(data) || null;
//       console.log(parsedData);
//       resolve(parsedData);
//     }],
//     validateStatus: (status) => {
//       return status >= 200 && status < 300;
//     },
//     params: {
//       count: 2,
//     },
//   });
// });

const getProductData = () => {
  return new Promise((resolve, reject) => {
    let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/';
    V.Axios.get(url, {
      transformResponse: [(data) => {
        const parsedData = JSON.parse(data) || null;
        resolve(parsedData);
      }],
      validateStatus: (status) => {
        return status >= 200 && status < 300;
      },
      params: {
        count: 2,
      },
    });
  })
};

const startEtlPipeline = async () => {
  try {
    // Extract
    const allExtractPromises = Promise.all([
      getProductData()
    ]).then((data) => {
      console.log(data);
    })
    // Transform
    // Load Step
  } catch (err) {
    console.log(err);
  }
};

startEtlPipeline();