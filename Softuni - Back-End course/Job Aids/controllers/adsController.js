const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const adsService = require('../services/adsService');
const { getErrorMessage } = require('../utils/errorUtils.js');


// CREATE 
router.get('/create', isAuth, (req, res) => {
    res.render('ads/create');
});

router.post('/create', isAuth, async (req, res) => {
    const adsData = req.body;

    try {
        await adsService.create(req.user._id, adsData);
    } catch (error){
        return res.status(400).render('ads/create', {error: getErrorMessage(error)});
    };

    res.redirect('/ads/catalog');
});
// ------------------------------------------------------------------------------------------

// CATALOG

router.get('/catalog', async (req, res) => {
    const ads = await adsService.getAll();

    res.render('ads/catalog', { ads });
});


// ------------------------------------------------------------------------------------------



module.exports = router;