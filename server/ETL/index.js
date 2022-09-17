require('dotenv').config();
const { Pool, Client } = require('pg')
const Pass = require('../env/config.js');

const

const pool = new Pool({
  user: 'sdc',
  host: 'localhost',
  database: 'maindb',
  password: process.env.PASSWORD,
  port: 5432,
});

const connectPool = () => {
  return new Promise((resolve) => {
    resolve(pool.connect());
  })
}

async function runQuery() {
  await connectPool();
  pool.query('CREATE TABLE Product(id SERIAL, name VARCHAR(500), slogan VARCHAR(500), description text, category VARCHAR(500), default_price DOUBLE PRECISION, PRIMARY KEY(q_id)', (err, res) => {
    console.log(err, res);
  }).then(res => {
      pool.query("COPY questions(q_id, question_id, a_body, date, username, user_email, reported, helpful_count) FROM Answers DELIMITER ',' CSV HEADER;", (err, res) => {
      console.log(err, res)
    }).then(res => {
      pool.query("alter table questions alter column date type date using to_timestamp(date / 1000)::date;");
      console.log(err, res);
    })
  }).catch(err => console.log(err));

}
