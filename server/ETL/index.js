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

const runQuery = async () => {
  const client = await pool.connect();
  // client.query()
  //     .then((res) => {
  //       pool.query(`COPY persons(id,name,slogan,description
  //         ,category,default_price)
  //         FROM '${productFile}
  //         DELIMITER ','
  //         CSV HEADER;`);
  //     });
  const queryStr = `CREATE TABLE IF NOT EXISTS "Product1" (id SERIAL,
    name VARCHAR(500),
    slogan VARCHAR(500), description text, category VARCHAR(500),
    default_price DOUBLE PRECISION, PRIMARY KEY(id))`;
  const copyProduct = `COPY Product1 (id,name,slogan,description
             ,category,default_price)
             FROM '${productFile}'
             DELIMITER ','
             CSV HEADER;`;
  client.query(queryStr)
      .then((data) => {
        // data = data.rows || {};
        client.query(copyProduct)
            .then(() => {
              console.log('done');
            })
            .catch((err) => {
              console.log(err.message);
            });
      })
      .catch((err) => {
        console.log('Error connection');
      });
  // client.query(`GRANT pg_read_server_files TO ${config.user};`)
  //     .then(() => {
  //       console.log('GRANT works');
  //     });
  client.release();
  // console.log('testing ETL');
};

// runQuery();

module.exports = runQuery;
// async function runQuery() {
//   await connectPool();
//   pool.query('CREATE TABLE IF NOT EXISTS Product (id SERIAL, name VARCHAR(500), slogan VARCHAR(500), description text,
// category VARCHAR(500), default_price DOUBLE PRECISION, PRIMARY KEY(q_id)').then((res) => {
//     pool.query('COPY questions(q_id, question_id, a_body, date, username, user_email, reported, helpful_count) FROM Answers DELIMITER \',\' CSV HEADER;', (err, res) => {
//       console.log(err, res);
//     }).then((res) => {
//       pool.query('alter table questions alter column date type date using to_timestamp(date / 1000)::date;');
//       console.log(err, res);
//     });
//   }).catch((err) => console.log(err));
// }
