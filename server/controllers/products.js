// import models here
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    let data = null;
    try {
      data = await models.products.get()
          .then((data) => {
            data = data.rows || {};
            return data;
          });
      console.log('data in controllers ', data);
      res.status(200).json(data);
    } catch {
      console.error('Get Products goes wrong');
      res.status(400).json({err: 'Bad request'});
    }
  },

  getProduct: async (req, res) => {
    console.log('do something here');
  },
};
