let express = require ('express');
const router = express.Router();

let productController = require('../controllers/productController.js');

router.get('/detail/:productId', productController.detail);

module.exports = router