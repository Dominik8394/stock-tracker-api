const express = require('express');
const router = express.Router();

const Stock = require('../models/Stock');

router.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", ["http://localhost:8080"]); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * @desc        Retrieve portfolio data from database
 * @route       /api/stocks
 */
router.get('/api/stocks', async (req, res) => {
    try {
        const stocks = await Stock.find({})
            .lean()
        res.json(stocks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Sorry something went wrong: ' + error);
    }
});

/**˚
 * @desc        Retrieve portfolio data from database with respect
 *              to a particular user
 * @route       /api/stocks/:user
 */
router.get('/api/stocks/:user', async (req, res) => {
    try {
        console.log("Params: ", req.params.user);
        const stocks = await Stock.find({ user: req.params.user })
            .lean()
            .exec();
        res.json(stocks);
    } catch (error) {
        console.log(error);
        res.status(500).send('Sorry something went wrong: ' + error);
    }
});

/**
 * @desc        Remove all entries related to a user
 * @route       /api/stocks
 */
router.delete('/api/stocks', async (req, res) => {
    try {
        Stock.deleteMany({}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    } catch (error) {

    }
});

/**
 * @desc        Create a new trade in the database
 * @route       /api/stock
 */
router.post('/api/stock', async (req, res) => {
    try {
        console.log(req);
        await Stock.create(req.body.data);
        res.status(202).send('Accepted');
    } catch (err) {
        console.log(err);
        res.status(500).send('Sorry something went wrong: ' + err
            + req.body);
    }
});

/**
 * @descr       Provides a route for clients to check whether the server is up and running
 * @route       /api/server/health
 */
router.get('/api/server/health', (req, res) => {
    /* verify headers at this point? */
    res.status(200).send('Server is up and running!');
});

module.exports = router;