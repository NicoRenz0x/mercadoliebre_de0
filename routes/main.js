let express = require ('express');
const router = express.Router();
const homeController = require('../controllers/homeController.js');
const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');

router.get('/', homeController.home)
router.get('/register', registerController.home)
router.get('/login', loginController.home)

module.exports = router