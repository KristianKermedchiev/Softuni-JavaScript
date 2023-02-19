const router = require('express').Router();
const adsService = require('../services/adsService');

router.get('/', async (req, res) => {
    const viewObj = {};
    const ads = await adsService.getFirstThree();
    viewObj.ads = ads;
    res.render('home', viewObj );
});

module.exports = router;