const router = require('express-promise-router')();
const subcategoryController = require('../controllers/subcategory.controller');

router.get('/subcategories',subcategoryController.listAllSubCategories);


module.exports = router;