const db = require('../Database');

module.exports = {
  get: () => {
    // return new Promise((resolve) => {
    //   let queryStr = `SELECT * FROM public."Product"
    //   ORDER BY id ASC LIMIT 100`;
    //   let result = db.query(queryStr, (err, results) => {
    //     if (err) {
    //       // do something
    //     } else {
    //       return results;
    //     }
    //   });
    // })
    let queryStr = `SELECT * FROM public."Product" ORDER BY id ASC LIMIT 3`;
    console.log('models works');
    return db.query(queryStr);
  }
}