const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop'
    },
    name: {
        type: String
    },
    description: {
        type: String,
        default: "This is a test"
    }
});

module.exports = mongoose.model('Category', categorySchema);