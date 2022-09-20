require('dotenv').config();
const {Pool, Client} = require('pg');
const path = require('path');

// config for Pool
const config = {
  host: process.env.LOCAHOST,
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
};

const pool = new Pool(config);
const productFile = path.resolve(__dirname, '../Data/product.csv');
const relatedFile = path.resolve(__dirname, '../Data/related.csv');
const styleFile = path.resolve(__dirname, '../Data/styles.csv');

console.log(relatedFile);
console.log(styleFile);

const createTable = (tableName) => {
  return `CREATE TABLE IF NOT EXISTS "${tableName}" `;
};

const runQuery = async () => {
  // const queryStr = createTable('Product1') + `(id SERIAL,
  //   name VARCHAR(500),
  //   slogan VARCHAR(500), description text, category VARCHAR(500),
  //   default_price DOUBLE PRECISION, PRIMARY KEY(id))`;

  // // table name + columns
  // const copyProduct = `COPY "Product1" (id,name,slogan,description
  //            ,category,default_price)
  //            FROM '${productFile}'
  //            DELIMITER ','
  //            CSV HEADER;`;
  const copyTables = async (tableName,
      columnNameType,
      columnName,
      csvFile) => {
    const client = await pool.connect();

    // table name + columns (and column types)
    const queryStr = createTable(tableName) + columnNameType;

    // table name + columns
    const copyProduct = `COPY "${tableName}" ${columnName}
               FROM '${csvFile}'
               DELIMITER ','
               CSV HEADER;`;
    client.query(queryStr)
        .then((data) => {
          // data = data.rows || {};
          client.query(copyProduct)
              .then(() => {
                console.log(`done copying "${tableName}"`);
              })
              .catch((err) => {
                // console.log(err.message);
              });
        })
        .catch((err) => {
          console.log('Error connection');
        });
    client.release();
  };

  copyTables('Product',
      `(id SERIAL,
    name VARCHAR(500),
    slogan VARCHAR(500), description text, category VARCHAR(500),
    default_price VARCHAR(500), PRIMARY KEY(id))`,
      `(id,name,slogan,description
      ,category,default_price)`,
      productFile);

  copyTables('Related',
      `(id SERIAL,
  current_product_id SERIAL,
  related_product_id SERIAL, PRIMARY KEY(id))`,
      `(id,current_product_id,related_product_id)`,
      relatedFile);

  copyTables('Styles',
      `(id SERIAL,
        productId SERIAL,
        name VARCHAR(500),
        sale_price VARCHAR(500)
        ,original_price VARCHAR(500)
        ,default_style SERIAL, PRIMARY KEY(id))`,
      `(id,productId,name,sale_price,original_price,default_style)`,
      styleFile);

  // copyTables('Features1', `(id,product_id,feature,value)`,
  // `(id,product_id,feature,value)`);
};

// runQuery();

module.exports = runQuery;

