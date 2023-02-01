const mongoose = require('mongoose');
// const User = require('../models/User');

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    description: String,
    publicationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema);