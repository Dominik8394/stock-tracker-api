const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    isin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    boughtAt: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transaction: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
});

module.exports = mongoose.model('Stocks', StockSchema, 'stocks');