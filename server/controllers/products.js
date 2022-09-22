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
      data = await models.products.getProduct(id);
      data = data.rows || {};
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({err: e.message});
    }
  },

  // getProductStyles: async (req, res) => {
  //   // console.log('req params ', req.params);
  //   const {product_id} = req.params;
  //   let productsStyle = null;
  //   try {
  //     productsStyle = await models.products.getProductStyles(product_id);
  //     productsStyle = productsStyle.rows || {};
  //     const test = await productsStyle.map(async (product) => {
  //       product['default?'] = product['default?'] ? true : false;
  //       // grab the data photo to merge it with the current product
  //       let productPhotos = await models.products.getProductPhotos(
  //           product['style_id'],
  //       );
  //       productPhotos = productPhotos.rows || {};
  //       if (!product.hasOwnProperty('photos')) {
  //         product.photos = productPhotos;
  //       }
  //       return product;
  //     });

  //     // confirm before setTimeout
  //     console.log('productsStyle ', test);

  //     const productObj = {
  //       'product_id': product_id,
  //       'results': test,
  //     };

  //     // after setTimeout
  //     setTimeout(() => {
  //       console.log('Delayed productsStyle ', productsStyle);
  //     }, 5000);

  //     res.status(200).json(productObj);
  //   } catch (e) {
  //     res.status(400).json({error: e.message});
  //   }
  // },

  getProductStylesAndPhotos: async (req, res) => {
    const {product_id} = req.params;
    let data = null;
    try {
      data = await models.products.getProductStylesAndPhotos(product_id);
      data = {'product_id': product_id, ...data.rows[0]} || {};
      // if (!data.hasOwnProperty('product_id')) {
      //   data.product_id = product_id;
      // }
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({err: e.stack});
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
