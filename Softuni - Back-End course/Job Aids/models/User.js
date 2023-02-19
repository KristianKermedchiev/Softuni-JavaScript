const mongoose = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new mongoose.Schema({
    email: {
        type: String, required: true, validate: {
            validator(value) {
                return EMAIL_PATTERN.test(value);
            },
            message: 'Email must be valid'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5,'Password is too short!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxLength: [40, 'Description should be at most 40 characters long!']
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;