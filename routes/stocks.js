const express = require('express');
const router = express.Router();

const { getStocksByUser, deleteStocksByUser, createStock, getStocks } = require('../controller/StockController');

const Stock = require('../models/Stock');

router.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", ["http://localhost:8080"]); // update to match the domain you will make the request from
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
    next();
});

// router.route('/api/stocks/:user')
//     .get(getStocksByUser)
//     .delete(deleteStocksByUser);

/**˚
 * @desc        Retrieve portfolio data from database with respect
 *              to a particular user
 * @route       /api/stocks/:user
 */
router.get('/api/stocks/:user', getStocksByUser);

/**
 * @desc ...
 * 
 * @route ...
 */
router.get('/api/stocks', getStocks);

/**
 * @desc        Remove all entries related to a user
 * @route       /api/stocks
 */
router.delete('/api/stocks/:user', deleteStocksByUser);

/**
 * @desc        Create a new trade in the database
 * @route       /api/stock
 */
router.post('/api/stock', createStock);

/**
 * @descr       Provides a route for clients to check whether the server is up and running
 * @route       /api/server/health
 */
router.get('/api/server/health', (req, res) => {
    /* verify headers at this point? */
    res.status(200).send('Server is up and running!');
});

module.exports = router;