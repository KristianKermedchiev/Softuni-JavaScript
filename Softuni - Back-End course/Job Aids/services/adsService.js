const Ads = require('../models/Ads');

exports.getAll = () => Ads.find({}).lean();

// CREATE
exports.create = (ownerId, adsData) => Ads.create({ ...adsData, owner: ownerId });