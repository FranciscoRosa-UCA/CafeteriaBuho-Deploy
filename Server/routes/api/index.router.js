const express = require('express');
const router = express.Router();

const menuRouter = require('./menu.router');
const cateogryRouter = require('./category.router');

router.use('/menu', menuRouter);
router.use('/category', cateogryRouter);

module.exports = router;