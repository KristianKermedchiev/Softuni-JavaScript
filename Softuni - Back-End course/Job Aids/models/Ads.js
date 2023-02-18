const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    companyName: {
        type: String,
        required: true,
    },

    companyDescription: {
        type: String,
        required: true,
    },

    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    users:  [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
});

const Ads = mongoose.model('Ads', adsSchema);

module.exports = Ads;