const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

// exports.findByUsername = (username) => User.findOne({username});

exports.findByEmail = (email) => User.findOne({email});

exports.register = async (username, email, password, repeatPassord) => {

    if(password !== repeatPassord){
        throw new Error('Password mismatch!');
    };

    // TODO : check if user exists
    const existingUser = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if(existingUser) {
        throw new Error('Invalid username!');
    };

    // TODO: validate password

    const hashedPassword = await bcrypt.hash(password, 10);
    
    
    await User.create({ username, email, password: hashedPassword });

    // return this.login(email, password);
};

exports.login = async (email, password) => {
    // User Exists?

    const user = await this.findByEmail(email);

    if(!user){
        throw new Error('Invalid email or password!');
    };

    // Password is valid?

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error('Invalid email or password!');
    };

    // Generate token.

    const payload = { 
        _id: user._id,
        email,
        username: user.username,
    }
    const token = await jwt.sign(payload, SECRET);
    
    return token;
};