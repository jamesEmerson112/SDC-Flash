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
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({err: e.message});
    }
  },

  getProduct: async (req, res) => {
    const {id} = req.params;
    let data = null;
    try {
      data = await models.products.getProduct(id)
          .then((data) => {
            data = data.rows || {};
            return data;
          });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({err: e.message});
    }
  },

  getProductStyles: async (req, res) => {
    // console.log('req params ', req.params);
    const {product_id} = req.params;
    let dataStyle = null;
    let dataPhotos = null;
    try {
      dataStyle = await models.products.getProductStyles(product_id)
          .then((data) => {
            // transform data
            data = data.rows || {};
            data.map(async (product) => {
              product['default?'] = product['default?'] ? true : false;
              console.log('product style id ', product['style_id']);

              // grab the data photo to merge it with the current product
              dataPhotos = await
              models.products.getProductPhotos(product['style_id'])
                  .then((dataPhoto) => {
                    dataPhoto = dataPhoto.rows || {};
                    console.log('dataPhoto ', dataPhoto);
                  });
            });
            // console.log(data);
            return data;
          });

      const productObj = {
        'product_id': product_id,
        'results': dataStyle,
      };
      res.status(200).json(productObj);
    } catch (e) {
      res.status(400).json({error: e.message});
    }
  },

  getProductRelated: async (req, res) => {
    const {product_id} = req.params;
    let data = null;
    try {
      data = await models.products.getProductRelated(product_id)
          .then((data) => {
            // transform data
            data = data.rows || {};
            const newData = [];
            data.map((relatedProduct) => {
              if (relatedProduct !== null || relatedProduct !== undefined) {
                newData.push(relatedProduct['related_product_id']);
              };
            });
            return newData.sort();
          });
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({err: e.stack});
    }
  },
};
