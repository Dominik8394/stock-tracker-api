const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const session = require('express-session');

/**
 * Auth server:   dev-00766427.okta.com
 * Client ID:     0oauwx9lsOKHhFddM5d6
 * Client secret: sjI7iil0Jcp3YNHKXNRRwQutw58HfV1U89xEz-qr
 * Token:         00eqD5G4aB2Oj40-he1ASq2NV3bLzWHyAgvd91_Ln2
 */

dotenv.config({ path: './config/config.env' });

connectDB();

const HOST = '0.0.0.0';

const app = express();


app.use(cors());

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

/**
 * Place routes below this comment
 */
app.use('/', require('./routes/stocks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST,
   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

