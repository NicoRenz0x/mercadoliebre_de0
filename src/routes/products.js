let express = require ('express');
const router = express.Router();

let productController = require('../controllers/productController.js');

router.get('/detail/:id', productController.detail);