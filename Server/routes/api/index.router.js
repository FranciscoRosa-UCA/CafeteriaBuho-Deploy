const express = require('express');
const router = express.Router();

const cateogryRouter = require('./category.router');
const productRouter = require('./product.router');

router.use('/product', productRouter);
router.use('/category', cateogryRouter);

module.exports = router;