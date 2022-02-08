const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');


const getStocksByUser = async (req, res) => {
    try {

        if (!req.params.user) {
            res.json({
                message: "Missing user name in request"
            });
        }

        const stocks = await Stock.find({ user: req.params.user })
            .lean()
            .exec();
        res.json(stocks);
    } catch (error) {
        console.log("Error on request: ", error);
       res.json({
           message: "Server error on request",
           status: res.status(500),
           errorMessage: error 
       });
    }
}

const deleteStocksByUser = async (req, res) => {
    try {

        if (!req.params.user) {
            res.json({
                message: "Missing user name in request"
            });
        }

        Stock.deleteMany({ user: req.params.user }, (err, result) => {
            if (err) {
                res.json({ message: "Could not delete documents" });
            } else {
                res.json({ message: "Sucessfully deleted documents", status: result });
            }
        })
    } catch (error) {
        console.log("Error on request: ", error);
        res.json({
            message: "Server error on request",
            status: res.status(500),
            errorMessage: error
        });
    }
}

const createStock = async (req, res) => {
    if (!req.body.data) {
        res.json({
            message: "Missing data in request body!"
        });
    }
    
    try {
        await Stock.create(req.body.data);
        
        res.status(202).send('Accepted');
        
    } catch (error) {
        console.log("Error on request: ", error);
        res.json({
            message: "Server error on request",
            status: res.status(500),
            errorMessage: error
        });
    }
}

module.exports = {
    getStocksByUser,
    deleteStocksByUser,
    createStock
}