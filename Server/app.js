const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api/index.router');

const app = express();

const mongodb = require('./config/mongo.db');
mongodb.connect();

const cloudinary = require('./config/cloudinary');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

module.exports = app;
