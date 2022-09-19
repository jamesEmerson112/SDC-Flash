const path = require('path');
const fs = require('fs');
const fastcsv = require('fast-csv');
var Pool = require('pg-pool')

  // config for Pool
const config = {
  host: process.env.LOCAHOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
}

const pool = new Pool(config);

module.exports = pool;
