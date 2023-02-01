const mongoose = require('mongoose');
// const Post = require('../models/Post');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    fullname: String,
    email: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['admin', 'subscriber'],
        default: 'subscriber'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        default: null
    }]
});

// Bcrypt Middleware
UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt))
        .then(hash => {
            user.password = hash;
            next();
        })
        .catch(err => next(err));
})

// Compare Password Method
UserSchema.methods.comparePassword = function (candidatePassword) {
    bcrypt.compare(candidatePassword, this.password)
        .then(isMatch => isMatch)
        .catch(err => console.log(err))
}

const User = mongoose.model('User', UserSchema);

module.exports = User;