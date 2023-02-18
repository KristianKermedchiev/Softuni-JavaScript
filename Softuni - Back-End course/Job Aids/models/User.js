const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    adds: [{
        type: mongoose.Types.ObjectId,
        ref: 'Ads',
    }],
});


const User = mongoose.model('User', userSchema);

module.exports = User;