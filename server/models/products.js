const db = require('../Database');

module.exports = {
  get: async () => {
    const queryStr = `SELECT * FROM public."Product" ORDER BY id ASC LIMIT 5`;
    return db.query(queryStr);
  },

  getProduct: async (id) => {
    const queryStr = `SELECT * FROM public."Product" WHERE id = ${id}`;
    return db.query(queryStr);
    // console.log(id);
  },

  getProductStyles: async (productId) => {
    const queryStr = `SELECT
    id AS "style_id",
    name,
    original_price,
    sale_price,
    default_style AS "default?"
    FROM public."Styles"
    WHERE productid = ${productId}`;
    return db.query(queryStr);
  },

  getProductPhotos: async (styleId) => {
    // console.log('getProductPhotos style Id ', styleId);
    // return db.query();
    const queryStr = `SELECT
    "thumbnail_url",
    "url"
    FROM public."Photos"
    WHERE styleid = ${styleId}`;
    return db.query(queryStr);
  },

  getProductRelated: async (productId) => {
    const queryStr = `SELECT
    related_product_id
    FROM public."Related"
    WHERE current_product_id = ${productId}`;
    return db.query(queryStr);
  },
};
