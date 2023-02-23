const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');

router.use(homeController);
router.use(authController);

// TODO add router for the assignment and router for all * requests that should lead to 404;
module.exports = router;