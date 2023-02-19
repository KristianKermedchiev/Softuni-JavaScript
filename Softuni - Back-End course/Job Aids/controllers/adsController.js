const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware.js');
const adsService = require('../services/adsService');
const { getErrorMessage } = require('../utils/errorUtils.js');
const User = require('../models/User');

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

// DELETE 

router.get('/:adsId/delete', isAuth, async (req, res) => {
    await adsService.delete(req.params.adsId);

    res.redirect('/ads/catalog');
}); 


// ------------------------------------------------------------------------------------------

// DETAILS

router.get('/:adsId/details', async (req, res) => {
    const ads = await  adsService.getOne(req.params.adsId);
    
    const isOwner = ads.owner == req.user?._id;
    const isClient = ads.users?.some(id => id == req.user?._id);
    const owner = req.user?.email;

    res.render('ads/details', { ads, isOwner, isClient, owner });
});



// ------------------------------------------------------------------------------------------

// EDIT

router.get('/:adsId/edit', isAuth, async (req, res) => {
    const ads = await adsService.getOne(req.params.cryptoId);

    res.render('ads/edit', { ads });
});

router.post('/:adsId/edit', isAuth, async (req, res) => {
    const adsData = req.body;

   await adsService.edit(req.params.adsId, adsData);
    
    res.redirect(`/ads/${req.params.adsId}/details`);
});


// ------------------------------------------------------------------------------------------

// APPLY FOR JOB

router.get('/:adsId/apply', isAuth, async (req, res) => {
    try {
        await adsService.apply(req.user._id, req.params.adsId);
        } catch (error){
            return res.status(400).render('404', {error: getErrorMessage(error)});
        };
    
        res.redirect(`/ads/${req.params.adsId}/details`);
});

// ------------------------------------------------------------------------------------------

// SEARCH

router.get('/search', async (req, res) => {
    const email = req.query;
    const ads = await adsService.search(email);

    res.render('ads/search', { ads, email });
});

module.exports = router;