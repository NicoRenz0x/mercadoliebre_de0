let express = require ('express');
const router = express.Router();

let productController = require('../controllers/productController.js');

router.get('/detail/:productId', productController.detail);

/* Creación de producto */
router.get("/creation", productController.register); 
router.post("/creation", productController.create);

/* Edición de producto */
router.get("/edition/:productid", productController.edition); 
router.put("/edition/:productid", productController.edit);


module.exports = router