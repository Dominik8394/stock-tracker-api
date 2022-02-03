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
        type: mongoose.Decimal128,
        required: true
    },
    transaction: {
        type: mongoose.Decimal128,
        required: true
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    totalAmount: {
        type: mongoose.Decimal128,
        required: true
    },
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
});

module.exports = mongoose.model('Stocks', StockSchema);