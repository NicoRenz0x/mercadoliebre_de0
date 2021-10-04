let express = require ('express');
const router = express.Router();

let productController = require('../controllers/productController.js');

router.get('/detail/:productId', productController.detail);

/* Creación de producto */
router.get("/creation", productController.register); 
router.put("/creation", productController.create);

/* Edición de producto */
router.get("/edition/:productId", productController.edition); 
router.put("/edition/:productId", productController.edit);


module.exports = router