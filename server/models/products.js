const db = require('../Database');

module.exports = {
  get: async () => {
    const queryStr = `SELECT * FROM public."Product" ORDER BY id ASC LIMIT 1`;
    return db.query(queryStr);
  },
};
