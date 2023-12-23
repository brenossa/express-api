const express = require('express');
const router = express.Router();
const {getProducts, getProduct, postProduct, putProduct, deleteProduct} = require('../controllers/products');

router.route('/')
  .get(getProducts)
  .post(postProduct)
router.route('/:productId')
  .get(getProduct)
  .put(putProduct)
  .delete(deleteProduct)

module.exports = router;