const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const session = require('express-session');

dotenv.config({ path: './config/config.env' });

connectDB();

const HOST = '0.0.0.0';
const whitelist = ["http://localhost:3000"];

const app = express();

const corsOptions = {
   origin: function(origin, callback) {
      if(!origin || whitelist.indexOf(origin) !== -1) {
         callback(null, true);
      } else {
         callback(new Error("Not allowed by CORS"));
      }
   },
   credentials: true,
}

app.use(cors(corsOptions));

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
// app.use('view engine', 'pug');
/**
 * Place routes below this comment
 */
app.use('/', require('./routes/stocks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, HOST,
   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

