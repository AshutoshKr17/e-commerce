const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    email: String,
});

const userDetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    addresses: [{
        address: String,
        mobile: String
    }]
});

const User = mongoose.model('User', userSchema);
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = { User, UserDetails };
