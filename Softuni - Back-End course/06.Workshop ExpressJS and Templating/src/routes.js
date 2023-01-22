const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/create', cubeController.getCreateCube);
router.get('/details/:cubeId', cubeController.getDetails)
router.get('*', homeController.getOtherPage);

router.post('/create', cubeController.postCreateCube);

module.exports = router;