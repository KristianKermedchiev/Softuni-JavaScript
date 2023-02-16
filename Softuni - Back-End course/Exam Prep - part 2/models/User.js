const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLenght: 5,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        minLenght: 10,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;