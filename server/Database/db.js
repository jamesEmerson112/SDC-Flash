require('dotenv').config();
const path = require('path');
const fs = require('fs');
const fastcsv = require('fast-csv');
var Pool = require('pg-pool')

const productFile = path.resolve(__dirname, './product.csv');

let stream = fs.createReadStream(productFile);
let csvData = [];

// // config for Pool
// const config = {
//   host: process.env.LOCAHOST,
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT_DB,
// }

// let csvStream = fastcsv
//               .parse()
//               .on('data', (data) => {
//                 // console.log(data);
//                 csvData.push(data);
//               })
//               .on('end', () => {
//                 csvData.shift();

//                 // connecting to postgresSQL with Pool

//                 const pool = new Pool(config);

//                 // Transform and Load
//                 const query =
//                     'INSERT INTO category (id,name,slogan,description,category,default_price) VALUES ($1, $2, $3, $4, $5, $6)';

//                 pool.connect().then(client => {
//                   csvData.forEach((row) => {
//                     client.query(query, ['pg-pool'])
//                       .then(res => {
//                         client.release();
//                         console.log('hello from ', res.rows[0]);
//                       })
//                       .catch(e => {
//                         client.release();
//                         console.error('query error ', e.message, e.stack);
//                       })
//                   })
//                 })
//               })


// stream.pipe(csvStream);


// const test = 'test';
// module.exports.test = test;


