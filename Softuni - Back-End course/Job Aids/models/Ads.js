const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
        minLength: [4, 'Headline must be at least 4 characters long!']
    },

    location: {
        type: String,
        required: true,
        minLength: [8, 'Location must be at least 8 characters long!']
    },

    companyName: {
        type: String,
        required: true,
        minLength: [3, 'Company name must be at least 3 characters long!']
    },

    companyDescription: {
        type: String,
        required: true,
        maxLength: [40, 'Description name must be at most 40 characters long!']
    },

    owner: {
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