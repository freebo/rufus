var mongoose = require('mongoose');

var Price = mongoose.model('Price', {
    ticker: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    value: {
        type: Number,
        default: false,
    },
    pricedAt: {
        type: Date,
        default: null
    }
});


module.exports = {Price};