const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const adsController = require('./controllers/adsController');

router.use(homeController);
router.use(authController);
router.use('/ads', adsController);
router.all('*', (req, res) =>{
    res.render('home/404');
});

module.exports = router;