const db = require('../Database');

module.exports = {
  get: async () => {
    //step 1 - establish connection
    const client = await db.connect();
    let queryStr = `SELECT * FROM public."Product" ORDER BY id ASC LIMIT 1`;
    // step 2: do query
    return client.query(queryStr)
      .then(async (resultQuery) => {
        resultQuery = resultQuery.rows || {};
        // step 3: release client
        client.release();
        return resultQuery;
      })
      .catch((err) => {
        // display error
        console.error(err.stack);
        client.release();
      })
    // step 3: release

      // .then(async (data) => {
      //   data = data.rows;
      //   console.log('query works');
      //   console.log('data in MODELS ', data);
      //   client.release();
      //   return await data;
      // })
      // .catch((err) => {
      //   console.log(err.message);
      //   client.release();
      //   return;
      // })

    // db.query is already a Promise
    // pool.query is already a Promise
    // return db.query(queryStr);
    // return results;

  }
}