const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    isin: {
        type: String,
        required: true
    },
    title: {
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
    cost: {
        type: Number,
        required: true
    },
    fee: {
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

module.exports = mongoose.model('Stocks', StockSchema);