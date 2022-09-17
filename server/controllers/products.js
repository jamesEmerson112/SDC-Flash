// import models here
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    // let data = null;
    // try {
    //   // grab data
    //   data = await models.get();
    // } catch {
    //   console.error('get Products goes wrong');
    //   res.sendStatus(400);
    // } finally {
    //   res.status(200).send('OK');
    //   res.json(data);
    // }
    console.log('GET products works');
    let results = await models.products.get();
    res.status(200).json(results.rows);
    // res.sendStatus(200);
  },

  getProduct: async (req, res) => {
    console.log('do something here');
  }
};