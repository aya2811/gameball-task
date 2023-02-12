const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

router.get('/products',productController.listAllProducts);


module.exports = router;