const Ads = require('../models/Ads');
const authService = require('./authService');

exports.getAll = () => Ads.find({}).lean();

exports.create = (ownerId, adsData) => Ads.create({ ...adsData, owner: ownerId }, console.log(ownerId, adsData));

exports.getOne = (adsId) => Ads.findById(adsId).lean();

exports.delete = (adsId) => Ads.findByIdAndDelete(adsId);

exports.edit = (adsId, adsData) => Ads.findByIdAndUpdate(adsId, adsData, { runValidators: true });

exports.getFirstThree = () => { return Ads.find().limit(3).lean() };

exports.apply = async (userId, adsId) => {
    const ad = await Ads.findById(adsId);
    
    ad.users.push(userId);

    return ad.save();
};

exports.search = async (email) => {
    let ads = await this.getAll();

    if(email){
        ads = ads.filter(x => x.email.toLowerCase() == email.toLowerCase());
    };

    return ads;
};