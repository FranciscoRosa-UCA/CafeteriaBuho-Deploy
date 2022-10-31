const express = require('express');
const router = express.Router();

const menuRouter = require('./menu.router');

router.use('/menu', menuRouter);

module.exports = router;