const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware.js');
const cryptoService = require('../services/cryptoService');
const { getErrorMessage } = require('../utils/errorUtils.js');

router.get('/create', isAuth, (req, res) => {
    res.render('crypto/create');
});

router.post('/create', isAuth, async (req, res) => {
    const cryptoData = req.body;

    try {
        await cryptoService.create(req.user._id, cryptoData);
    } catch (error){
        return res.status(400).render('crypto/create', {error: getErrorMessage(error)});
    }

    res.redirect('/crypto/catalog');
});

module.exports = router;