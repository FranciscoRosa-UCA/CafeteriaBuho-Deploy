const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api/index.router');
const cors = require('cors');

const app = express();

const mongodb = require('./config/mongo.db');
const cloudinary = require('./config/cloudinary');

mongodb.connect();
const corsOptions = {
    origin: ['https://cafeteriabuho.netlify.app', 'http://localhost:5173'],
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use('/api', apiRouter);

module.exports = app;
