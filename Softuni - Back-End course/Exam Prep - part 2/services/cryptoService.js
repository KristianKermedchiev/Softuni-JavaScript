const Crypto = require('../models/Crypto');

exports.create = (ownerId, cryptoData) => Crypto.create({...cryptoData, owner: ownerId});