const axios = require('axios');
const config = require('../../env/config.js');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';

const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: config.API_KEY,
  },
});

module.exports.objectToArrayFunction = (obj) => {
  const array = [];
  for (const key in obj) {
    array.push(obj[key]);
  }

  return array;
};

module.exports.topXItems = (numberOfItems, array) => {
  const resultArr = [];
  // if the num of items > array.length, adjust the length
  const temp = (numberOfItems > array.length) ? array.length : numberOfItems;

  for (let index = 0; index < temp; index += 1) {
    resultArr.push(array[index]);
  }
  return resultArr;
};

module.exports.Axios = Axios;

module.exports.sayHello = () => {
  console.log('Say Hello on Browser');
  console.log('Hi, ', config.userName);
  console.log(config);
}


// GRABBING DATA FROM API
// const getProductData = () => {
//   return new Promise((resolve, reject) => {
//     let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/';
//     V.Axios.get(url, {
//       transformResponse: [(data) => {
//         const parsedData = JSON.parse(data) || null;
//         resolve(parsedData);
//       }],
//       validateStatus: (status) => {
//         return status >= 200 && status < 300;
//       },
//       params: {
//         count: max,
//       },
//     });
//   })
// };

// const startEtlPipeline = async () => {
//   try {
//     // Extract
//     const allExtractPromises = Promise.all([
//       getProductData()
//     ]).then((data) => {
//       // console.log(data);
//       console.log('done');
//     })
//     // Transform
//     // Load Step
//   } catch (err) {
//     console.log(err);
//   }
// };
